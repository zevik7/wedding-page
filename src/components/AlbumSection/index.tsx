'use client';
import * as React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import BackgroundMusic from '../BackgroundMusicButton';
import PhotoAlbumImage from '../PhotoAlbumImage';
import photos from './photos';

// Plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Section from '../Section';
import OptimalImage from '../OptimalImage';

const AlbumSection = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <Section title=" Ảnh cưới" subTitle="Nơi lưu giữ những kỷ niệm.">
      <div className="relative max-h-screen overflow-scroll">
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          renderPhoto={(photo) => (
            <PhotoAlbumImage key={photo.imageProps.src} {...photo} />
          )}
          sizes={{ size: '100vw' }}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={{
            slide: ({ slide }) => (
              <OptimalImage
                key={slide.src}
                src={slide.src}
                alt="Detail image"
                sizes="80vw"
                priority={true}
              />
            ),
            thumbnail: ({ slide }) => (
              <OptimalImage
                key={slide.src}
                src={slide.src}
                alt="Thumbnail image"
                sizes="20vw"
              />
            ),
          }}
        />
      </div>
    </Section>
  );
};

export default React.memo(AlbumSection);
