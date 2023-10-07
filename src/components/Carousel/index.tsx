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

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { shimmer, toBase64 } from "@/utils";

const images: string[] = [
  "KTIU3786",
  "KTIU3457 BIA ",
  "KTIU3476",
  "KTIU3269",
  "KTIU3232",
];

function Carousel() {
  return (
    <div className="carousel w-full">
      <>
        <Swiper
          className=" w-full h-[90vh]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                fill
                priority
                alt="Main carousel image"
                src={`/images/file/${image}.jpg`}
                style={{ objectFit: "contain" }}
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}

export default Carousel;
