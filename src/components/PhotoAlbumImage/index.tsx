'use client';
import type { RenderPhotoProps } from 'react-photo-album';
import OptimalImage from '../OptimalImage';

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
        sizes="25vw"
        {...{ alt, title, className, onClick }}
        className="hover:scale-120"
      />
    </div>
  );
}
