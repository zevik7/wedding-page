'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { RenderPhotoProps } from 'react-photo-album';
import OptimalImage from '../OptimalImage';
import { motion } from 'framer-motion';

export default function PhotoAlbumImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div key={photo.src} style={{ ...wrapperStyle, position: 'relative' }}>
      <OptimalImage
        src={photo.src}
        quality={80}
        sizes="20vw"
        {...{ alt, title, className, onClick }}
        className="hover:scale-110"
      />
    </div>
  );
}
