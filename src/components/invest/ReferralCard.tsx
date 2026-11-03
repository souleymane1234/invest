'use client';

import React, { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';
import { APP_NAME } from '@/config';

type Props = {
  code: string;
  link?: string;
};

const iconSx = (color: string) => ({ color, '& path': { fill: color } });

export const ReferralCard: React.FC<Props> = ({ code, link }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = link || code;
  const shareText = `Rejoins-moi sur ${APP_NAME} pour investir avec les meilleures maisons de trading ! Utilise mon code : ${code}${link ? ` — ${link}` : ''}`;

  const copy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const share = async () => {
    if (navigator.share) {
      await navigator
        .share({ title: APP_NAME, text: shareText, url: link })
        .catch(() => undefined);
    } else {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: 16,
        borderRadius: 20,
        backgroundColor: 'var(--white-color)',
        border: '1px dashed var(--accent-color)',
      }}
    >
      <CardGiftcardRoundedIcon sx={{ fontSize: 32, ...iconSx('#e0a83a') }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <span className="t12">Votre code de parrainage</span>
        <p
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: 2,
            color: 'var(--main-color)',
          }}
        >
          {code}
        </p>
      </div>
      <Tooltip title={copied ? 'Copié !' : link ? 'Copier le lien' : 'Copier le code'}>
        <IconButton onClick={copy} aria-label="Copier le code de parrainage">
          <ContentCopyRoundedIcon sx={iconSx('#1e2538')} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Partager">
        <IconButton onClick={share} aria-label="Partager le code de parrainage">
          <ShareRoundedIcon sx={iconSx('#1e2538')} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
