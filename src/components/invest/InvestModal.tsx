'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AssetImage as Image } from './AssetImage';
import { usePathname, useRouter } from 'next/navigation';
import { Alert, CircularProgress, Dialog, IconButton, Stack } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { URLS_ASSETS } from '@/config';
import { data } from '@/data';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { HomeTab } from '@/stores/useTabStore';
import { LocalStorageService } from '@/storages/local_storage_service';
import { Investment } from '@/types/InvestmentType';
import {
  expectedGain,
  formatDate,
  formatDuration,
  formatInputAmount,
  formatPercent,
  parseInputAmount,
} from '@/utils/invest_helper';
import {
  isPlanOpen,
  planMaturityDate,
  planWorkStartDate,
} from '@/utils/plan_helper';
import { sortNotifications } from '@/utils/notification_helper';
import { MarketChip } from './Badges';
import { LevelBadge } from './LevelBadge';
import { useUserLevel } from '@/hooks/useUserLevel';
import { Amount } from '@/components/invest/Amount';
import { useMoney } from '@/hooks/useMoney';

type Step = 'form' | 'processing' | 'success';

const Row: React.FC<{
  label: string;
  value: React.ReactNode;
  strong?: boolean;
}> = ({
  label,
  value,
  strong,
}) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
    <span className='t14'>{label}</span>
    <span
      style={{
        fontWeight: strong ? 700 : 500,
        color: strong ? 'var(--success-color)' : 'var(--main-color)',
        textAlign: 'right',
      }}
    >
      {value}
    </span>
  </div>
);

export const InvestModal: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isDesktop } = useDeviceDetect();
  const { isOpen, house, planId, closeModal } = stores.useInvestModal();
  const { isLoggedIn, user, setUser } = stores.useUserStore();
  const walletState = stores.useWalletStore((state) => state.wallet);
  const { setNotifications } = stores.useNotificationStore();
  const { setTab } = stores.useTabStore();
  const { rank, isLocked, levelOf } = useUserLevel();
  const {
    code,
    digits,
    symbol,
    formatAmount,
    formatLocal,
    formatWithLocal,
    showLocal,
    toDisplay,
    toStorage,
  } = useMoney();

  const [step, setStep] = useState<Step>('form');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [investment, setInvestment] = useState<Investment | null>(null);

  useEffect(() => {
    if (!isOpen || !house) return;
    const available = house.plans.filter(
      (item) => isPlanOpen(item) && !isLocked(item),
    );
    const plan =
      available.find((item) => item.id === planId) ??
      available[0] ??
      house.plans[0];
    setStep('form');
    setSelectedPlanId(plan.id);
    setAmount(formatInputAmount(toDisplay(plan.minAmount), digits));
    setError('');
    setInvestment(null);
  }, [isOpen, house, planId, rank, digits, code]);

  const plan = useMemo(
    () => house?.plans.find((item) => item.id === selectedPlanId) ?? null,
    [house, selectedPlanId],
  );

  if (!house || !plan) return null;

  const numericDisplay = parseInputAmount(amount);
  const storageAmount = Math.round(toStorage(numericDisplay));
  const wallet = Math.round(
    Math.max(user?.activeBalance ?? 0, walletState?.activeBalance ?? 0),
  );
  const rangeError =
    storageAmount < plan.minAmount || storageAmount > plan.maxAmount
      ? `Le montant doit être compris entre ${formatWithLocal(plan.minAmount)} et ${formatWithLocal(plan.maxAmount)}`
      : '';
  const insufficientWallet = isLoggedIn && storageAmount > wallet;
  const insufficientFromApi = /insuffisant/i.test(error);
  const amountError = rangeError
    ? rangeError
    : insufficientWallet
      ? `Solde actif insuffisant (${formatWithLocal(wallet)})`
      : '';
  const showWalletCta = insufficientWallet || insufficientFromApi;
  const planOpen = isPlanOpen(plan);
  const canSubmit = planOpen && !rangeError && storageAmount > 0;

  const gain = expectedGain(storageAmount, plan.expectedReturn);
  const endDate = planMaturityDate(plan);
  const workStart = planWorkStartDate(plan);

  const hasAccess =
    !isLocked(house) &&
    house.plans.some((item) => isPlanOpen(item) && !isLocked(item));
  const houseLevel = levelOf(house.requiredLevel);

  const goToLevels = () => {
    closeModal();
    router.push(Routes.LEVELS);
  };

  const changePlan = (id: string) => {
    const next = house.plans.find((item) => item.id === id)!;
    setSelectedPlanId(id);
    if (
      storageAmount < next.minAmount ||
      storageAmount > next.maxAmount
    ) {
      setAmount(formatInputAmount(toDisplay(next.minAmount), digits));
    }
  };

  const goToSignIn = () => {
    LocalStorageService.saveLocationRedirection(pathname);
    closeModal();
    router.push(Routes.SIGN_IN);
  };

  const submit = async () => {
    setError('');
    if (insufficientWallet) {
      setError(
        `Solde actif insuffisant (${formatWithLocal(wallet)}). Rechargez votre portefeuille pour continuer.`,
      );
      return;
    }
    setStep('processing');
    try {
      const response = await data.invest({
        forfaitId: plan.id,
        amount: storageAmount,
        houseId: house.id,
        planId: plan.id,
      });
      if (!response.etat) {
        throw new Error(response.error?.[0] ?? 'L’investissement a échoué');
      }
      setInvestment(response.result?.investment ?? null);
      const [freshUser, apiNotifications, investments] = await Promise.all([
        data.getUser(),
        data.getNotifications().catch(() => null),
        data.getInvestments().catch(() => []),
      ]);
      if (freshUser) {
        setUser({ ...freshUser, investments });
        setNotifications(
          sortNotifications(apiNotifications ?? freshUser.notifications ?? []),
        );
      }
      stores.useLevelsStore.getState().loadInvestorLevel();
      stores.useWalletStore.getState().load();
      setStep('success');
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Une erreur est survenue',
      );
      setStep('form');
    }
  };

  const goToPortfolio = () => {
    closeModal();
    setTab(HomeTab.PORTFOLIO);
    if (pathname !== Routes.HOME) router.push(Routes.HOME);
  };

  const renderHeader = () => (
    <Stack direction='row' alignItems='center' gap={1.5} sx={{ mb: 2 }}>
      <Image
        src={`${URLS_ASSETS.HOUSES}/${house.logo}`}
        alt={house.name}
        width={44}
        height={44}
        style={{ borderRadius: 12 }}
      />
      <div style={{ flex: 1 }}>
        <span className='t12'>Investir chez</span>
        <h4>{house.name}</h4>
      </div>
      <IconButton onClick={closeModal} aria-label='Fermer'>
        <CloseRoundedIcon />
      </IconButton>
    </Stack>
  );

  const renderNoAccess = () => (
    <Stack alignItems='center' gap={1.5} sx={{ py: 4, textAlign: 'center' }}>
      <LevelBadge
        rank={house.requiredLevel}
        level={houseLevel}
        locked
        size='medium'
      />
      <h4>
        Maison réservée au palier {houseLevel?.name ?? house.requiredLevel}
      </h4>
      <p className='t16'>
        {house.name} est accessible à partir du niveau{' '}
        {house.requiredLevelLabel || `palier ${house.requiredLevel}`}. Continuez
        à investir dans les formules de votre niveau pour progresser.
      </p>
      <Button
        label='Voir comment progresser'
        containerStyle={{ width: '100%', marginTop: 8 }}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          goToLevels();
        }}
      />
    </Stack>
  );

  const renderForm = () => (
    <>
      <h6 style={{ marginBottom: 8 }}>1. Choisissez une formule</h6>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}
      >
        {house.plans.map((item) =>
          !isPlanOpen(item) ? (
            <span key={item.id} title="Souscription close" style={{ opacity: 0.55 }}>
              <MarketChip label={`${item.name} · fermée`} />
            </span>
          ) : isLocked(item) ? (
            <span
              key={item.id}
              title={`Disponible : ${item.requiredLevelLabel || `palier ${item.requiredLevel}`}`}
              style={{ opacity: 0.55 }}
            >
              <MarketChip
                label={`🔒 ${item.name} · ${item.requiredLevelLabel || `palier ${item.requiredLevel}`}`}
              />
            </span>
          ) : (
            <MarketChip
              key={item.id}
              label={`${item.name} · ${formatPercent(item.expectedReturn, true)}${
                item.durationDays
                  ? ` / ${formatDuration(item.durationDays)}`
                  : ''
              }`}
              active={item.id === plan.id}
              onClick={() => changePlan(item.id)}
            />
          ),
        )}
      </div>

      <h6 style={{ marginBottom: 8 }}>2. Montant à investir ({symbol})</h6>
      <InputField
        value={amount}
        type='text'
        placeholder={formatInputAmount(toDisplay(plan.minAmount), digits)}
        onChange={(event) => {
          const raw = event.target.value;
          if (digits <= 0) {
            setAmount(raw.replace(/\D/g, ''));
            return;
          }
          const cleaned = raw.replace(/[^\d.,]/g, '');
          const [whole, ...rest] = cleaned.split(/[.,]/);
          setAmount(
            rest.length === 0
              ? cleaned.replace('.', ',')
              : `${whole},${rest.join('').slice(0, digits)}`,
          );
        }}
        containerStyle={{ marginBottom: 8 }}
      />
      {showLocal && storageAmount > 0 ? (
        <p className="t12" style={{ margin: '-4px 0 10px' }}>
          Soit {formatLocal(storageAmount)}
        </p>
      ) : null}
      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}
      >
        {[
          plan.minAmount,
          Math.round((plan.minAmount + plan.maxAmount) / 2 / 1000) * 1000,
          plan.maxAmount,
        ].map((value) => (
          <MarketChip
            key={value}
            label={formatAmount(value)}
            active={storageAmount === value}
            onClick={() =>
              setAmount(formatInputAmount(toDisplay(value), digits))
            }
          />
        ))}
      </div>
      {amountError && amount.length > 0 && (
        <Alert severity='warning' sx={{ mb: 2 }}>
          {amountError}
        </Alert>
      )}
      {!planOpen && (
        <Alert severity='warning' sx={{ mb: 2 }}>
          La souscription à {plan.name} est close
          {plan.subscriptionEndDate
            ? ` depuis le ${formatDate(plan.subscriptionEndDate)}`
            : ''}
          .
        </Alert>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          padding: 16,
          margin: '12px 0 20px',
          borderRadius: 20,
          backgroundColor: 'var(--white-color)',
          border: '1px solid var(--border-color)',
        }}
      >
        {plan.description && (
          <p className='t14' style={{ marginBottom: 4 }}>
            {plan.description}
          </p>
        )}
        <Row
          label='Rendement prévu'
          value={`${formatPercent(plan.expectedReturn, true)}${
            plan.durationDays
              ? ` en ${formatDuration(plan.durationDays)}`
              : ''
          }`}
        />
        <Row
          label='Gains estimés'
          value={<Amount value={amountError ? 0 : gain} signed />}
          strong
        />
        <Row
          label='Total à l’échéance'
          value={<Amount value={amountError ? 0 : storageAmount + gain} />}
        />
        <Row label='Échéance' value={formatDate(endDate)} />
        {plan.subscriptionEndDate && (
          <Row
            label='Souscription jusqu’au'
            value={formatDate(plan.subscriptionEndDate)}
          />
        )}
        {workStart && (
          <Row
            label='Début du travail'
            value={formatDate(workStart)}
          />
        )}
      </div>

      {!planOpen ? null : !isLoggedIn ? (
        <>
          <Alert severity='info' sx={{ mb: 2 }}>
            Connectez-vous avec votre numéro de téléphone pour finaliser votre
            investissement.
          </Alert>
          <Button
            label='Se connecter pour investir'
            onClick={(event: React.MouseEvent) => {
              event.preventDefault();
              goToSignIn();
            }}
          />
        </>
      ) : (
        <>
          <h6 style={{ marginBottom: 8 }}>3. Confirmation</h6>
          <Alert severity={showWalletCta ? 'warning' : 'info'} sx={{ mb: 2 }}>
            {showWalletCta
              ? `Solde actif insuffisant (${formatWithLocal(wallet)}). Rechargez votre portefeuille pour investir ${formatWithLocal(storageAmount)}.`
              : `${formatWithLocal(storageAmount)} sera débité de votre solde actif${
                  wallet > 0 ? ` (${formatWithLocal(wallet)})` : ''
                }.`}
          </Alert>

          {error && (
            <Alert severity='error' sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {showWalletCta ? (
            <Button
              label='Aller à mon portefeuille'
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                goToPortfolio();
              }}
            />
          ) : (
            <Button
              label={`Investir ${amountError ? '' : formatAmount(storageAmount)}`}
              disabled={!canSubmit}
              onClick={(event: React.MouseEvent) => {
                event.preventDefault();
                if (canSubmit) submit();
              }}
            />
          )}
          <p className='t12' style={{ marginTop: 12, textAlign: 'center' }}>
            Les performances passées ne préjugent pas des performances futures.
            Investir comporte un risque de perte en capital.
          </p>
        </>
      )}
    </>
  );

  const renderProcessing = () => (
    <Stack
      alignItems='center'
      justifyContent='center'
      gap={2}
      sx={{ py: 8, textAlign: 'center' }}
    >
      <CircularProgress sx={{ color: 'var(--accent-color)' }} />
      <h4>Investissement en cours…</h4>
      <p className='t16'>
        Débit de {formatWithLocal(storageAmount)} sur votre solde.
      </p>
    </Stack>
  );

  const renderSuccess = () => (
    <Stack alignItems='center' gap={1.5} sx={{ py: 3, textAlign: 'center' }}>
      <CheckCircleRoundedIcon
        sx={{ fontSize: 72, color: 'var(--success-color)' }}
      />
      <h3 style={{ fontWeight: 700 }}>Investissement confirmé !</h3>
      <p className='t16'>
        Vous avez investi {formatWithLocal(investment?.amount ?? storageAmount)}{' '}
        dans la formule {plan.name} de {house.name}.
      </p>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          padding: 16,
          margin: '8px 0 12px',
          borderRadius: 20,
          backgroundColor: 'var(--white-color)',
          border: '1px solid var(--border-color)',
        }}
      >
        <Row
          label='Gains estimés'
          value={<Amount value={gain} signed />}
          strong
        />
        <Row
          label='Total à l’échéance'
          value={<Amount value={storageAmount + gain} />}
        />
        <Row
          label='Échéance'
          value={formatDate(investment?.endDate ?? endDate)}
        />
      </div>
      <Button
        label='Voir mon portefeuille'
        containerStyle={{ width: '100%' }}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          goToPortfolio();
        }}
      />
      <Button
        label='Fermer'
        colorScheme='secondary'
        containerStyle={{ width: '100%' }}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          closeModal();
        }}
      />
    </Stack>
  );

  return (
    <Dialog
      open={isOpen}
      onClose={step === 'processing' ? undefined : closeModal}
      fullScreen={!isDesktop}
      maxWidth='sm'
      fullWidth
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#F5FAFB',
            borderRadius: isDesktop ? '28px' : 0,
          },
        },
      }}
    >
      <div style={{ padding: 24 }}>
        {renderHeader()}
        {step === 'form' && (hasAccess ? renderForm() : renderNoAccess())}
        {step === 'processing' && renderProcessing()}
        {step === 'success' && renderSuccess()}
      </div>
    </Dialog>
  );
};
