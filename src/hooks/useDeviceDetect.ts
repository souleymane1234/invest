import {
  useWindowSize,
  useMediaQuery,
  useNetworkState,
  useScreenOrientation,
} from '@react-hookz/web';

/**
 * Hook global pour détecter l'environnement de l'utilisateur
 */
export function useDeviceDetect() {
  // measureOnMount: true => la taille réelle n'est lue qu'après le montage
  // (donc identique au SSR : {0, 0}) au lieu d'être lue de façon synchrone
  // pendant le rendu d'hydratation, ce qui provoquait un mismatch (React #418).
  const { width = 0, height = 0 } = useWindowSize(undefined, true);
  const orientation = useScreenOrientation();
  const { online: isOnline } = useNetworkState();

  // initializeWithValue: false => la valeur vaut `undefined` au SSR et lors du
  // premier rendu client (identique), puis se met à jour après le montage via
  // l'effet interne du hook. Sans ça, le premier rendu client lisait déjà le
  // vrai `matchMedia`, ce qui divergeait du HTML serveur et faisait planter
  // l'hydratation dès qu'un composant (Home, HouseDetail, InvestModal...)
  // affichait un arbre différent selon isDesktop/isMobile.
  const isMobile = useMediaQuery('(max-width: 768px)', {
    initializeWithValue: false,
  });
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)', {
    initializeWithValue: false,
  });
  const isDesktop = useMediaQuery('(min-width: 1025px)', {
    initializeWithValue: false,
  });

  return {
    width,
    height,
    orientation,
    isOnline,
    isMobile,
    isTablet,
    isDesktop,
  };
}
