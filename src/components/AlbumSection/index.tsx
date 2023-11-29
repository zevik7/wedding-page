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
  const [currentPhotos, setCurrentPhotos] = React.useState(photos.slice(0, 20));
  const ref = React.useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    if (currentPhotos.length > photos.length) {
      window.scrollTo({ behavior: 'smooth', top: ref.current?.offsetTop });
      setCurrentPhotos(photos.slice(0, 20));
      return;
    }

    const nextPhotos = photos.slice(
      currentPhotos.length,
      photos.length < currentPhotos.length + 20
        ? photos.length
        : currentPhotos.length + 20
    );

    setCurrentPhotos((prevPhotos) => [...prevPhotos, ...nextPhotos]);
  };

  return (
    <Section title=" Ảnh cưới" subTitle="Nơi lưu giữ những kỷ niệm.">
      <div className="relative">
        <PhotoAlbum
          layout="columns"
          photos={currentPhotos}
          renderPhoto={(photo) => (
            <PhotoAlbumImage key={photo.imageProps.src} {...photo} />
          )}
          sizes={{ size: '100vw' }}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          slides={currentPhotos}
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

        <div className="flex justify-center p-5" ref={ref}>
          <button
            type="button"
            onClick={() => handleLoadMore()}
            className="m-auto py-3 px-8 bg-red-400 text-green-100 font-bold rounded"
          >
            {currentPhotos.length <= photos.length ? 'Xem thêm' : 'Ẩn bớt'}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default AlbumSection;
