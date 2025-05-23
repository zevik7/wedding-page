'use client';
import * as React from 'react';
import PhotoAlbum, { RenderPhotoProps } from 'react-photo-album';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import PhotoAlbumImage from '../PhotoAlbumImage';
import photosLink from './photos';

// Plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import OptimalImage from '../OptimalImage';
import flower1 from '../../../public/images/decoration/flower-medium.svg';
import flower2 from '../../../public/images/decoration/flower-medium2.svg';
import TitleSection from '../TitleSection';
import { motion } from 'framer-motion';

const AlbumSection = () => {
  let photos = React.useMemo(
    () => photosLink.slice(0, photosLink.length / 2),
    []
  );
  const [index, setIndex] = React.useState(-1);
  const [currentPhotos, setCurrentPhotos] = React.useState(photos.slice(0, 20));
  const ref = React.useRef<HTMLDivElement>(null);

  const handleLoadMore = React.useCallback(() => {
    if (currentPhotos.length >= photos.length) {
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
  }, [currentPhotos, photos]);

  const renderImage = React.useMemo(
    () => ({
      slide: ({ slide }: { slide: SlideImage }) => (
        <OptimalImage
          key={slide.src}
          src={slide.src}
          alt="Detail image"
          sizes="80vw"
          priority={true}
        />
      ),
      thumbnail: ({ slide }: { slide: SlideImage }) => (
        <OptimalImage
          key={slide.src}
          src={slide.src}
          alt="Thumbnail image"
          quality={50}
          sizes="20vw"
        />
      ),
    }),
    []
  );

  const renderAlbumThumb = React.useCallback(
    (photo: RenderPhotoProps) => (
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="relative  h-full w-full"
      >
        <PhotoAlbumImage key={photo.imageProps.src} {...photo} />
      </motion.div>
    ),
    []
  );

  return (
    <div>
      <div className="relative py-12 sm:py-16 m-auto">
        <div className="absolute w-[211px] h-[199px] sm:w-[424px] sm:h-[398px] -left-[100px] -top-[150px] -scale-y-100 rotate-90 -z-30">
          <OptimalImage src={flower1} alt="" sizes="20vw" />
        </div>
        <div className="absolute  w-[211px] h-[199px] sm:w-[424px] sm:h-[398px]  -right-[100px] -top-[0px] -z-30">
          <OptimalImage src={flower2} alt="" sizes="20vw" />
        </div>
        <TitleSection content="Hình cưới nè!!!" />
      </div>
      <div className="relative px-2">
        <PhotoAlbum
          layout="columns"
          photos={currentPhotos}
          renderPhoto={renderAlbumThumb}
          sizes={{ size: '100vw' }}
          spacing={5}
          onClick={({ index: current }) => setIndex(current)}
        />
        <Lightbox
          index={index}
          slides={currentPhotos}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          render={renderImage}
        />

        <div className="flex justify-center p-5" ref={ref}>
          <button
            type="button"
            onClick={() => handleLoadMore()}
            className="m-auto py-3 px-8 bg-primary text-white font-bold"
          >
            {currentPhotos.length >= photos.length ? 'Ẩn bớt' : 'Xem thêm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlbumSection);
