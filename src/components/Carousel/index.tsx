'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Import Swiper styles

import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import OptimalImage from '../OptimalImage';
import { useWindowSize } from '@/hooks';

const selectedImagesDesktop: string[] = [
  '/images/file/KTIU3457 BIA .JPG',
  '/images/file/KTIU3476.JPG',
  '/images/file/KTIU4239.JPG',
];
const selectedImageMobile: string[] = [
  '/images/60.90/KTIU3551 60.90.JPG',
  '/images/60.90/KTIU4222 60.90 .JPG',
  '/images/13.18/KTIU3182 13.18.JPG',
  '/images/13.18/KTIU4046 13.18.JPG',
];

function Carousel() {
  const { width } = useWindowSize();

  let selectedImages = selectedImageMobile;
  if (width > 640) selectedImages = selectedImagesDesktop;

  return (
    <Swiper
      className="w-full h-full"
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      modules={[Autoplay]}
      pagination={false}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {selectedImages.map((selectedImage: string, idx: number) => (
        <SwiperSlide key={selectedImage}>
          {({ isActive }) => (
            <motion.div
              initial={{ scale: 1.3 }}
              transition={{ duration: 15 }}
              animate={{
                scale: isActive ? 1 : 1.3,
              }}
              className="h-full w-full"
            >
              <OptimalImage
                alt="Main carousel image"
                src={selectedImage}
                quality={100}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
