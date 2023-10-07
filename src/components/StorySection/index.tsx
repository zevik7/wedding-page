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
    <div className="mt-20 bg-slate-200 p-16">
      <h1 className="text-4xl font-bold text text-center text-primary">
        Hành trình
      </h1>
      <p className="m-4 text-base text text-center italic">
        Cuộc hành trình ngàn dặm bắt đầu bằng một bước.
      </p>
      <div className="relative">
        <Swiper
          className="max-w-screen-xl h-[75vh]"
          slidesPerView={'auto'}
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
        >
          {images.map((image, idx: number) => (
            <SwiperSlide key={image}>
              <div
                className={`h-full flex items-center ${
                  idx % 2 === 1 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="h-full w-1/2 relative">
                  <Image
                    fill
                    alt="Main carousel image"
                    src={`/images/13.18/${image}.jpg`}
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    sizes="100vw"
                    className="rounded-lg"
                  />
                </div>

                <div className="h-full w-1/2 flex flex-col justify-center p-8">
                  <h1
                    className={`text-3xl  ${idx % 2 === 1 ? 'text-right' : ''}`}
                  >
                    February 06, 2014
                  </h1>
                  <p
                    className={`text-base mt-6 ${
                      idx % 2 === 1 ? 'text-right' : ''
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin eget mauris scelerisque, rhoncus mauris tincidunt,
                    tincidunt sapien. Aliquam erat volutpat. Mauris nec molestie
                    dui, vel vulputate dolor. Vestibulum ut consectetur ante, a
                    finibus ipsum. Etiam congue eleifend turpis non luctus.
                    Suspendisse potenti. Mauris a elit a velit tincidunt
                    volutpat. Vivamus laoreet augue non risus aliquet venenatis.
                    Nulla mattis quam non mauris pretium pellentesque. Cras
                    tincidunt lorem eu dui convallis faucibus. Phasellus id
                    libero nec turpis molestie vulputate. Etiam dolor justo,
                    luctus lobortis ornare sit amet, feugiat ut neque. Phasellus
                    blandit ante tortor, ut venenatis nunc imperdiet
                    consectetur.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 right-0 z-50 flex flex-col opacity-50 hover:opacity-100">
          <button className="flex justify-center button-prev p-3 text-primary bg-base-100  rounded-full">
            <IoChevronUp />
          </button>
          <p className="paginationFraction text-xl"></p>
          <button className="flex justify-center button-next p-3 text-primary bg-base-100 rounded-full">
            <IoChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
