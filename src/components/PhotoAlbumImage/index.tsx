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
        quality={90}
        sizes="20vw"
        {...{ alt, title, className, onClick }}
        className="hover:scale-110"
      />
    </div>
  );
}
