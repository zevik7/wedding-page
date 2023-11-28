'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

export default function OptimalImage(props: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  const blurDataURL = 'blurDataURL' in props;

  return (
    <Image
      fill={props.width || props.height ? undefined : true}
      quality={100}
      placeholder={blurDataURL ? 'blur' : undefined}
      onLoadingComplete={() => setLoading(false)}
      {...props}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
      ${
        isLoading && !blurDataURL
          ? 'scale-105 blur-lg grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }) ${props.className}`}
    />
  );
}
