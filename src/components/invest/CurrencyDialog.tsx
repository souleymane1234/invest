'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { stores } from '@/stores';
import { updateUser } from '@/data/getUser';
import { UserType } from '@/types/UserType';
import { currencyName, STORAGE_CURRENCY } from '@/utils/invest_helper';

const PREFERRED = [
  'XOF',
  'XAF',
  'EUR',
  'USD',
  'GBP',
  'MAD',
  'GNF',
  'CDF',
  'NGN',
  'GHS',
  'KES',
  'TND',
  'DZD',
  'EGP',
  'ZAR',
];

type CurrencyOption = {
  code: string;
  name: string;
  label: string;
};

const isoCurrencies = (): Set<string> => {
  try {
    if (typeof Intl.supportedValuesOf === 'function') {
      return new Set(Intl.supportedValuesOf('currency'));
    }
  } catch {
    /* ignore */
  }
  return new Set(PREFERRED);
};

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CurrencyDialog: React.FC<Props> = ({ open, onClose }) => {
  const { user, setUser } = stores.useUserStore();
  const rates = stores.useCurrencyStore((state) => state.rates);
  const loadRates = stores.useCurrencyStore((state) => state.load);
  const current = (user?.currency || STORAGE_CURRENCY).toUpperCase();
  const [selected, setSelected] = useState<string>(current);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      loadRates();
      setSelected(current);
    }
  }, [open, current, loadRates]);

  const options = useMemo<CurrencyOption[]>(() => {
    const allowed = isoCurrencies();
    const list = (rates?.currencies ?? [])
      .filter((item) => PREFERRED.includes(item.code) || allowed.has(item.code))
      .map((item) => {
        const name = currencyName(item.code);
        return { code: item.code, name, label: `${item.code} — ${name}` };
      });

    const seen = new Set(list.map((item) => item.code));
    for (const code of PREFERRED) {
      if (seen.has(code) || !rates?.rates[code]) continue;
      const name = currencyName(code);
      list.push({ code, name, label: `${code} — ${name}` });
    }

    const rank = (code: string) => {
      const index = PREFERRED.indexOf(code);
      return index === -1 ? PREFERRED.length : index;
    };
    return list.sort(
      (a, b) =>
        rank(a.code) - rank(b.code) || a.name.localeCompare(b.name, 'fr'),
    );
  }, [rates]);

  const value =
    options.find((item) => item.code === selected) ??
    options.find((item) => item.code === current) ??
    null;

  const save = async () => {
    if (!selected || selected === current) {
      onClose();
      return;
    }
    setSaving(true);
    try {
      const { etat, result } = await updateUser({ currency: selected });
      const client =
        etat && result?.client
          ? ({ ...(result.client as UserType), currency: selected } as UserType)
          : user
            ? { ...user, currency: selected }
            : null;
      if (client) setUser(client);
      onClose();
    } catch (error) {
      if (user) setUser({ ...user, currency: selected });
      console.error(error);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog maxWidth='xs' fullWidth open={open} onClose={onClose}>
      <DialogTitle>Devise locale</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Les montants s’affichent en dollar (USD), avec un équivalent plus
          discret dans cette devise. Les paiements mobile money restent en
          FCFA.
        </DialogContentText>
        <Autocomplete
          options={options}
          value={value}
          onChange={(_, option) => setSelected(option?.code ?? current)}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, item) => option.code === item.code}
          renderInput={(params) => (
            <TextField {...params} label='Devise' placeholder='Rechercher' />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={save} disabled={saving || !selected}>
          Enregistrer
        </Button>
      </DialogActions>
    </Dialog>
  );
};
