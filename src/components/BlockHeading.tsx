import React from 'react';
import Link from 'next/link';
import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { svg } from '@/svg';
import { Box } from '@mui/material';

type Props = {
  href?: string;
  title: string;
  containerStyle?: React.CSSProperties;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
};

export const BlockHeading: React.FC<Props> = ({
  title,
  className,
  containerStyle,
  href,
}) => {
  const { isDesktop } = useDeviceDetect();
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isDesktop ? 'flex-start' : 'space-between',
        ...containerStyle,
      }}
    >
      <h3 style={{ textTransform: 'capitalize', display: 'inline-block' }}>
        {title}
      </h3>
      {href && (
        <Link href={href}>
          {!isDesktop && (
            <span className="t18" style={{ color: 'var(--main-color)' }}>
              Voir plus
            </span>
          )}
          {isDesktop && (
            <Box
              component="span"
              sx={{
                ml: 1,
                mt: 0.5,
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: 'var(--neon-white)',
              }}
            >
              <svg.RightArrowSvg />
            </Box>
          )}
        </Link>
      )}
    </div>
  );
};
