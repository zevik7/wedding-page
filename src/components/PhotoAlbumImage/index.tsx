'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { RenderPhotoProps } from 'react-photo-album';

export default function PhotoAlbumImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  const [isLoading, setLoading] = useState(true);

  const blurDataURL = 'blurDataURL' in photo;

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        placeholder={blurDataURL ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${
          isLoading && !blurDataURL
            ? 'scale-105 blur-lg grayscale'
            : 'scale-100 blur-0 grayscale-0'
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
