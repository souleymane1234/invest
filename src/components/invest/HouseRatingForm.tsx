'use client';

import React, { useState } from 'react';
import { Alert, Rating } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/Button';
import { data } from '@/data';
import { Routes } from '@/routes';
import { stores } from '@/stores';
import { LocalStorageService } from '@/storages/local_storage_service';
import { HouseReview, TradingHouse } from '@/types/TradingHouseType';

type Props = {
  house: TradingHouse;
  onSubmitted: (review: HouseReview) => void;
  onInvest: () => void;
};

export const HouseRatingForm: React.FC<Props> = ({
  house,
  onSubmitted,
  onInvest,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, user } = stores.useUserStore();
  const [rating, setRating] = useState<number | null>(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const ownReview = user
    ? house.reviews.find(
        (item) =>
          item.author === user.full_name || item.author === user.pseudo,
      )
    : undefined;
  const hasInvested = (user?.investments ?? []).some(
    (item) => item.houseId === house.id,
  );

  const goToSignIn = () => {
    LocalStorageService.saveLocationRedirection(pathname);
    router.push(Routes.SIGN_IN);
  };

  const submit = async () => {
    const stars = rating ?? 0;
    if (stars < 1) {
      setError('Choisissez une note de 1 à 5 étoiles.');
      return;
    }
    if (message.trim().length < 3) {
      setError('Écrivez un commentaire d’au moins 3 caractères.');
      return;
    }
    setError('');
    setPending(true);
    try {
      const response = await data.rateHouse(house.id, {
        rating: stars,
        message: message.trim(),
      });
      if (!response.etat) {
        throw new Error(
          response.error?.[0] ?? 'Impossible de publier votre avis',
        );
      }
      onSubmitted({
        id: String(response.result?.id ?? `review-${Date.now()}`),
        author: user?.full_name || user?.pseudo || 'Vous',
        avatar: user?.profil ?? '',
        rating: stars,
        comment: message.trim(),
        date: new Date().toISOString(),
      });
      setMessage('');
      setRating(0);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Impossible de publier votre avis',
      );
    } finally {
      setPending(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ marginBottom: 20 }}>
        <p className="t14" style={{ marginBottom: 12 }}>
          Connectez-vous pour noter {house.name}. Vous devez avoir investi dans
          cette maison.
        </p>
        <Button label="Se connecter" onClick={goToSignIn} />
      </div>
    );
  }

  if (ownReview) {
    return (
      <Alert severity="success" sx={{ mb: 2 }}>
        Vous avez déjà noté cette maison ({ownReview.rating}/5).
      </Alert>
    );
  }

  return (
    <div
      style={{
        marginBottom: 24,
        padding: 16,
        borderRadius: 20,
        backgroundColor: 'var(--neon-white)',
      }}
    >
      <h6 style={{ marginBottom: 6 }}>Votre avis</h6>
      <p className="t12" style={{ marginBottom: 12 }}>
        Réservé aux investisseurs de {house.name}.
      </p>
      <Rating
        value={rating}
        onChange={(_, value) => setRating(value)}
        size="large"
        sx={{ mb: 1.5 }}
      />
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Partagez votre expérience…"
        rows={4}
        style={{
          width: '100%',
          marginBottom: 12,
          padding: '12px 16px',
          borderRadius: 16,
          fontSize: 16,
          fontFamily: 'inherit',
          color: 'var(--main-color)',
          backgroundColor: 'var(--white-color)',
          border: '1px solid var(--border-color)',
          resize: 'vertical',
        }}
      />
      {error && (
        <Alert severity="error" sx={{ mb: 1.5 }}>
          {error}
        </Alert>
      )}
      {!hasInvested && (
        <Alert severity="info" sx={{ mb: 1.5 }}>
          La notation n’est acceptée que si vous avez investi.{' '}
          <span
            className="clickable"
            onClick={onInvest}
            style={{ fontWeight: 600 }}
          >
            Investir →
          </span>
        </Alert>
      )}
      <Button
        label={pending ? 'Publication…' : 'Publier mon avis'}
        disabled={pending}
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          if (!pending) submit();
        }}
      />
    </div>
  );
};
