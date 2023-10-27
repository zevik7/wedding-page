'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { RenderPhotoProps } from 'react-photo-album';

export default function OptimalImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const [isLoading, setLoading] = useState(true);

  const haveBlurImg = 'blurDataURL' in photo;

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        style={{ objectFit: 'contain' }}
        placeholder={haveBlurImg ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
        className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading && !haveBlurImg
                  ? 'scale-105 blur-lg grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
