# Paliers d'investissement — logique backend proposée

Le front est déjà branché sur ce contrat (mode seeder : `src/seeders/levels.ts` et `src/seeders/api.ts`).
Passer `NEXT_PUBLIC_USE_SEED_DATA=false` pour appeler les routes ci-dessous.

## Principe

- Tout nouvel utilisateur commence au **palier 1**.
- Chaque **maison** et chaque **formule** a un palier requis (`required_level`).
- Un utilisateur ne peut investir que dans une formule dont le palier requis est **≤ à son palier**.
- On monte **un palier à la fois**, en remplissant les critères du palier suivant.
- Un palier acquis n'est **jamais perdu** (pas de rétrogradation automatique ; seul un admin peut le modifier, par exemple en cas de fraude).

## Les 4 paliers (valeurs par défaut, modifiables en base)

| Rang | Nom | Formules jusqu'à | Maisons jusqu'à (rendement 12 mois) | Critères pour l'atteindre |
|---|---|---|---|---|
| 1 | Découverte | +10 % | +25 % | Inscription |
| 2 | Confirmé | +25 % | +35 % | 1 investissement échu, 50 000 FCFA investis (échus), profil complété |
| 3 | Expert | +50 % | +55 % | 3 investissements échus, 500 000 FCFA, profil complété, 30 jours d'ancienneté |
| 4 | Élite | illimité | illimité | 6 investissements échus, 2 000 000 FCFA, profil complété, 90 jours d'ancienneté |

« Échu » = investissement arrivé à son terme et payé (statut `completed`). Les investissements en cours ne comptent pas : l'utilisateur doit avoir prouvé qu'il est allé au bout.

## Modèle de données

```sql
CREATE TABLE investment_levels (
  rank                        INT PRIMARY KEY,           -- 1, 2, 3, 4
  name                        VARCHAR(50) NOT NULL,
  description                 TEXT,
  color                       VARCHAR(9),
  max_plan_return             DECIMAL(6,2) NULL,         -- NULL = illimité
  max_house_annual_roi        DECIMAL(6,2) NULL,         -- NULL = illimité
  req_completed_investments   INT NOT NULL DEFAULT 0,
  req_completed_amount        BIGINT NOT NULL DEFAULT 0, -- en FCFA
  req_profile_completed       BOOLEAN NOT NULL DEFAULT FALSE,
  req_account_age_days        INT NOT NULL DEFAULT 0,
  perks                       JSON
);

ALTER TABLE houses ADD COLUMN required_level INT NOT NULL DEFAULT 1 REFERENCES investment_levels(rank);
ALTER TABLE plans  ADD COLUMN required_level INT NOT NULL DEFAULT 1 REFERENCES investment_levels(rank);
ALTER TABLE users  ADD COLUMN level_rank     INT NOT NULL DEFAULT 1 REFERENCES investment_levels(rank);

CREATE TABLE user_level_history (            -- traçabilité des montées de palier
  id          UUID PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES users(id),
  from_rank   INT NOT NULL,
  to_rank     INT NOT NULL,
  reason      VARCHAR(50) NOT NULL,          -- 'auto' | 'admin'
  created_at  TIMESTAMP NOT NULL DEFAULT now()
);
```

### Palier requis d'une maison et d'une formule

Valeur proposée automatiquement à la création, **modifiable par l'admin** :

```
house.required_level = premier palier dont max_house_annual_roi >= house.annual_roi
plan.required_level  = max(house.required_level,
                           premier palier dont max_plan_return >= plan.expected_return)
```

Une formule ne peut donc jamais être plus accessible que sa maison. Contrainte à vérifier à l'enregistrement : `plan.required_level >= house.required_level`.

## Calcul du palier d'un utilisateur

```
fonction calculerPalier(user):
    progression = {
        investissements_echus : COUNT(investments WHERE user_id = user.id AND status = 'completed'),
        montant_echu          : SUM(amount)  (mêmes conditions),
        profil_complet        : user.full_name != '' ET user.email != '',
        anciennete_jours      : jours depuis user.created_at,
    }
    rang = 1
    pour chaque palier (rang croissant, à partir de 2):
        si progression ne remplit pas ses critères : arrêter
        rang = palier.rank
    retourner max(rang, user.level_rank)   // jamais de rétrogradation
```

### Quand recalculer (et non à chaque requête)

1. **Échéance d'un investissement** : dans le job (cron) qui clôture les investissements et verse les gains.
2. **Mise à jour du profil** (`PUT /user`) : le critère « profil complété » peut changer.
3. **Job quotidien** : pour le critère d'ancienneté.

Si le rang augmente :
- mettre à jour `users.level_rank` dans la même transaction ;
- insérer une ligne dans `user_level_history` ;
- créer une notification « Félicitations ! Vous passez au palier X… ».

## Contrôle à l'investissement (obligatoire côté serveur)

Dans `POST /investments`, **avant** d'initier le paiement mobile money :

```
si plan.required_level > user.level_rank :
    répondre 403 {
        etat: false,
        error: ["Cette formule est réservée au palier Expert ou supérieur."],
        result: { code: "LEVEL_REQUIRED", requiredLevel: 3 }
    }
```

Le front masque déjà les formules verrouillées, mais ce contrôle serveur est indispensable : on ne doit jamais se fier au client.

## Routes API

### `GET /api/v1/levels` (public)

```json
{ "etat": true, "result": [
  { "rank": 1, "name": "Découverte", "description": "...", "color": "#b7793f",
    "maxPlanReturn": 10, "maxHouseAnnualRoi": 25,
    "requirements": { "completedInvestments": 0, "completedAmount": 0,
                      "profileCompleted": false, "accountAgeDays": 0 },
    "perks": ["Formules jusqu’à +10 %", "Maisons à risque faible"] }
] }
```

### `GET /api/v1/user/level` (authentifié)

```json
{ "etat": true, "result": {
  "current": { "rank": 2, "name": "Confirmé", "...": "..." },
  "next":    { "rank": 3, "name": "Expert",   "...": "..." },
  "progress": { "completedInvestments": 2, "completedAmount": 150000,
                "profileCompleted": true, "accountAgeDays": 120 }
} }
```

### Champs ajoutés aux réponses existantes

- `GET /houses`, `GET /houses/:id` : `requiredLevel` sur la maison et sur chaque formule (`plans[].requiredLevel`).
- `GET /user` : `levelRank` (palier courant) et `created_at`.

## Back-office (admin)

- Modifier les seuils et avantages de chaque palier (table `investment_levels`).
- Forcer le palier d'une maison ou d'une formule.
- Promouvoir ou rétrograder manuellement un utilisateur (avec `reason = 'admin'` dans l'historique).

## Pistes d'évolution

- **Plafond d'encours par palier** (par exemple 500 000 FCFA d'investissements actifs au palier 1) pour limiter l'exposition des débutants.
- **Vérification d'identité (KYC)** comme critère du palier 3 ou 4.
- **Parrainage** : bonus de progression quand un filleul termine son premier investissement.
