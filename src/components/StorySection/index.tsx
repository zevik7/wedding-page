"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Mousewheel,
  Navigation,
  FreeMode,
  Scrollbar,
} from "swiper/modules";

import { shimmer, toBase64 } from "@/utils";
import Section from "../Section";

const images: string[] = [
  "KTIU4125 13.18 ",
  "KTIU4046 13.18",
  "KTIU4071 13.18",
  "KTIU3596 13.18",
  "KTIU3182 13.18",
  "KTIU3112 13.18",
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
      <div className="carousel w-full h-[90vh]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          className="w-4/6 max-w-screen-2xl"
          direction={"vertical"}
          mousewheel={true}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          modules={[Mousewheel, Pagination, Navigation, FreeMode, Scrollbar]}
          loop={true}
          freeMode={true}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="h-full flex items-center">
                <div className="h-full w-1/2 relative ml-4">
                  <Image
                    fill
                    priority
                    alt="Main carousel image"
                    src={`/images/13.18/${image}.jpg`}
                    style={{ objectFit: "cover" }}
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
                  <h1 className="text-3xl">February 06, 2014</h1>
                  <p className="text-base mt-6">
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
      </div>
    </div>
  );
}

export default StorySection;
