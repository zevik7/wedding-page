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
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</>
		</div>
	);
}

export default Carousel;
