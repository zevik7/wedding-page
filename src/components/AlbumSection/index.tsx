'use client';
import * as React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import slides from './slides';
import ImageGallery from './images';
import BackgroundMusic from '../BackgroundMusicButton';

const images: string[] = [
  'KTIU3786',
  'KTIU3457 BIA ',
  'KTIU3476',
  'KTIU3269',
  'KTIU3232',
];

export default function App() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="mt-20 p-16">
      <h1 className="text-4xl font-bold text text-center text-primary">
        Ảnh cưới
      </h1>
      <p className="m-4 text-base text text-center italic">
        Nơi lưu giữ những kỷ niệm.
      </p>

      <BackgroundMusic />
      {/* <ImageGallery /> */}
      <PhotoAlbum
        layout="masonry"
        photos={slides}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
