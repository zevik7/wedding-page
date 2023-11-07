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
import 'swiper/css/scrollbar';

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Mousewheel,
  Navigation,
  FreeMode,
  Scrollbar,
} from 'swiper/modules';

import { shimmer, toBase64 } from '@/utils';
import './style.css';

import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import OptimalImage from '../OptimalImage';
import Section from '../Section';

const images: string[] = [
  'KTIU4125 13.18 ',
  'KTIU4046 13.18',
  'KTIU4071 13.18',
  'KTIU3596 13.18',
  'KTIU3182 13.18',
  'KTIU3112 13.18',
];

function StorySection() {
  return (
    <Section
      title={'Hành trình'}
      subTitle="Cuộc hành trình ngàn dặm bắt đầu bằng một bước."
      className="bg-white"
    >
      <div className="relative max-w-screen-lg m-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          direction={'vertical'}
          pagination={{
            type: 'fraction',
            el: '.paginationFraction',
          }}
          modules={[Pagination, Navigation, Scrollbar]}
          loop={false}
          navigation={{
            enabled: true,
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          className="w-full h-[90vh]"
        >
          {images.map((image, idx: number) => (
            <SwiperSlide key={image}>
              <div
                className={`grid gap-2 grid-cols-1 sm:grid-cols-2 grid-rows-1 h-full`}
              >
                <div className="relative grow">
                  <OptimalImage
                    alt="Main carousel image"
                    src={`/images/13.18/${image}.jpg`}
                    quality={100}
                    sizes="30vw"
                    className="object-contain rounded-lg"
                  />
                </div>

                <div className="p-4 grow-0 flex flex-col justify-center">
                  <h1 className={`text-xl `}>February 06, 2014</h1>
                  <p className={` overflow-hidden text-base mt-4`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin eget mauris scelerisque, rhoncus mauris tincidunt,
                    tincidunt sapien. Aliquam erat volutpat. Mauris nec molestie
                    dui, vel vulputate dolor. Vestibulum ut consectetur ante, a
                    finibus ipsum. Etiam congue eleifend turpis non luctus.
                    Suspendisse potenti. Mauris a elit a velit tincidunt
                    volutpat.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1/2 translate-y-1/2 right-0 sm:-right-7 z-50 flex flex-col">
          <button className="flex justify-center button-prev p-3 text-primary bg-base-100 rounded-full">
            <IoChevronUp />
          </button>
          <p className="paginationFraction text mt-4 mb-4"></p>
          <button className="flex justify-center button-next p-3 text-primary bg-base-100 rounded-full">
            <IoChevronDown />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default StorySection;
