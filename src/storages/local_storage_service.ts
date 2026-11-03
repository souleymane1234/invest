import { UserType } from '@/types/UserType';

export class LocalStorageService {
  private static readonly CURRENT_NAVIGATION = 'current_navigation';
  private static readonly TOKEN_KEY = 'jwt_token';
  private static readonly USER_KEY = 'userInfo';
  private static readonly HOME_DICTACIEL_TOUR_KEY = 'home_dictaciel_tour';
  private static readonly LOCATION_REDIRECTION_KEY = 'location_redirection';

  private static readonly FIRST_CONNEXION_KEY = 'first_connexion';

  // Mémorise `isFirstConnexion` (réponse de connexion) pour afficher l'accueil une seule fois
  static setFirstConnexion(value: boolean): void {
    if (value) localStorage.setItem(this.FIRST_CONNEXION_KEY, 'true');
    else localStorage.removeItem(this.FIRST_CONNEXION_KEY);
  }

  static isFirstConnexion(): boolean {
    return localStorage.getItem(this.FIRST_CONNEXION_KEY) === 'true';
  }

  static saveLocationRedirection(url: string): void {
    localStorage.setItem(this.LOCATION_REDIRECTION_KEY, url);
  }

  // Récupérer le token JWT
  static getLocationRedirection(): string | null {
    return localStorage.getItem(this.LOCATION_REDIRECTION_KEY);
  }

  // Sauvegarder le token JWT
  static saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Récupérer le token JWT
  static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Vérifier si le token JWT est présent
  static isTokenPresent(): boolean {
    return this.getToken() !== null;
  }

  // Supprimer le token JWT
  static removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // Sauvegarder l'utilisateur
  static saveUser(user: UserType): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Récupérer l'utilisateur
  static getUser(): UserType | null {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  // Sauvegarder le token JWT
  static saveCurrentNavigation(currentIndex: number): void {
    localStorage.setItem(this.CURRENT_NAVIGATION, currentIndex.toString());
  }

  // Récupérer le Current index de navigation
  static getCurrentNavigation(): number {
    const currentNavigation = localStorage.getItem(this.CURRENT_NAVIGATION);
    return currentNavigation ? Number.parseInt(currentNavigation, 10) : 0;
  }

  // Sauvegarder le visite du home dictaciel tour
  static saveHomeDictacielTourVisited(): void {
    localStorage.setItem(this.HOME_DICTACIEL_TOUR_KEY, 'true');
  }

  // Récupérer l'état du visite du home dictaciel tour
  static isHomeDictacielTourVisited(): boolean {
    const alreadyVisited = localStorage.getItem(this.HOME_DICTACIEL_TOUR_KEY);
    return alreadyVisited === 'true';
  }

  // Supprimer les infos du user
  static removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  static clearData(): void {
    [this.USER_KEY, this.TOKEN_KEY].map((key) => localStorage.removeItem(key));
  }

  static clearAllData(): void {
    localStorage.clear();
  }
}
