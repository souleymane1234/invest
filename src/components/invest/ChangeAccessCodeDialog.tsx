'use client';

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { ACCESS_CODE_MAX_LENGTH, ACCESS_CODE_MIN_LENGTH } from '@/config';
import { changeAccessCode } from '@/data/authentication';
import { AccessCodeField } from './AccessCodeField';

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
};

const codeRule = `${ACCESS_CODE_MIN_LENGTH} à ${ACCESS_CODE_MAX_LENGTH} chiffres`;

export const ChangeAccessCodeDialog: React.FC<Props> = ({
  open,
  onClose,
  onSuccess,
}) => {
  const [currentCode, setCurrentCode] = useState('');
  const [newCode, setNewCode] = useState('');
  const [confirmCode, setConfirmCode] = useState('');
  const [error, setError] = useState('');
  const [isSending, setSending] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCurrentCode('');
    setNewCode('');
    setConfirmCode('');
    setError('');
  }, [open]);

  const submit = async () => {
    setError('');
    if (!currentCode) {
      setError('Entrez votre code d’accès actuel.');
      return;
    }
    if (
      newCode.length < ACCESS_CODE_MIN_LENGTH ||
      newCode.length > ACCESS_CODE_MAX_LENGTH
    ) {
      setError(`Le nouveau code doit contenir ${codeRule}.`);
      return;
    }
    if (newCode !== confirmCode) {
      setError('Les deux nouveaux codes ne correspondent pas.');
      return;
    }
    if (newCode === currentCode) {
      setError('Le nouveau code doit être différent de l’actuel.');
      return;
    }
    setSending(true);
    try {
      const response = await changeAccessCode(currentCode, newCode);
      if (!response.etat) {
        setError(
          response.error?.[0] ??
            response.message ??
            'Impossible de changer le code.',
        );
        return;
      }
      onSuccess(response.message ?? 'Votre code d’accès a été modifié.');
      onClose();
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Impossible de changer le code.',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={isSending ? undefined : onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>Changer mon code d’accès</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Votre code d’accès vous sert à vous connecter. Choisissez un nouveau
          code de {codeRule}.
        </DialogContentText>
        <AccessCodeField
          value={currentCode}
          onChange={setCurrentCode}
          placeholder="Code actuel"
          autoFocus
          containerStyle={{ marginBottom: 12 }}
        />
        <AccessCodeField
          value={newCode}
          onChange={setNewCode}
          placeholder="Nouveau code"
          containerStyle={{ marginBottom: 12 }}
        />
        <AccessCodeField
          value={confirmCode}
          onChange={setConfirmCode}
          placeholder="Confirmez le nouveau code"
          onEnter={submit}
          containerStyle={{ marginBottom: 12 }}
        />
        {error && <Alert severity="error">{error}</Alert>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isSending}>
          Annuler
        </Button>
        <Button onClick={submit} disabled={isSending}>
          {isSending ? <CircularProgress size={20} /> : 'Enregistrer'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
