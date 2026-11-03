'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

const isRemote = (src: ImageProps['src']) =>
  typeof src === 'string' && /^https?:\/\//i.test(src);

/**
 * next/image refuse d'optimiser les URLs d'api.tradeshouses.com
 * (résolution NAT64 vue comme IP privée). On les charge telles quelles.
 */
export const AssetImage: React.FC<ImageProps> = ({ unoptimized, ...props }) => (
  <Image {...props} unoptimized={unoptimized ?? isRemote(props.src)} />
);
