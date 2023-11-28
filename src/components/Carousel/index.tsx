'use client';
import React from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import { shimmer, toBase64 } from '@/utils';
import OptimalImage from '../OptimalImage';
import Lightbox from 'yet-another-react-lightbox';
import { Photo } from 'react-photo-album';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { useWindowSize } from '@/hooks';

const selectedImages: string[] = [
  'KTIU3786',
  'KTIU3457 BIA ',
  'KTIU3476',
  'KTIU3269',
  'KTIU3232',
];

function Carousel() {
  const { width } = useWindowSize();

  return (
    <div className="w-full">
      <Swiper
        className="w-full h-[50vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh]"
        slidesPerView={(width > 1024 && 1.8) || (width > 640 && 1.4) || 1}
        centeredSlides
        spaceBetween={20}
        modules={[Autoplay]}
        pagination={false}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
      >
        {selectedImages.map((selectedImage: string, idx: number) => (
          <SwiperSlide key={selectedImage} className="">
            <OptimalImage
              alt="Main carousel image"
              src={'/images/file/' + selectedImage + '.JPG'}
              quality={85}
              sizes="75vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
