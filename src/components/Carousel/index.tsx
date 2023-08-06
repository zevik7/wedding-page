"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
	Pagination,
	Navigation,
	Autoplay,
	EffectCreative,
} from "swiper/modules";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

function Carousel() {
	const images: string[] = ["land1", "land2", "land3", "land4"];

	return (
		<div className="carousel w-full">
			<>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation, EffectCreative]}
					className="mySwiper w-full h-[90vh]"
					centeredSlides={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					grabCursor={true}
					effect={"creative"}
					creativeEffect={{
						prev: {
							shadow: true,
							translate: [0, 0, -400],
						},
						next: {
							translate: ["100%", 0, 0],
						},
					}}
				>
					{images.map((image) => (
						<SwiperSlide key={image}>
							<Image
								fill
								priority
								alt="Carousel image"
								src={`/images/${image}.jpg`}
								style={{ objectFit: "cover" }}
								quality={100}
								placeholder="blur"
								blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		</div>
	);
}

export default Carousel;
