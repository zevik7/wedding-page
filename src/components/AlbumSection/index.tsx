'use client';
import * as React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import BackgroundMusic from '../BackgroundMusicButton';
import OptimalImage from '../OptimalImage';
import photos from './photos';

// Plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function AlbumSection() {
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
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        renderPhoto={OptimalImage}
        sizes={{ size: '100vw' }}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
