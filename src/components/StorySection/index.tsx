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
import SnowFallBackground from '../SnowFallBackground';

type Story = {
  date: string;
  imgName: string;
  content: string;
};

const stories: Story[] = [
  {
    date: '06/02/2014',
    imgName: '2014',
    content:
      'Hôm ấy là một ngày đặc biệt, ngày khởi đầu cho hành trình của anh và em. Tuy không phải là ngày đầu tiên gặp nhau nhưng là ngày đầu tiên em và anh cho nhau một cơ hội để được cùng nhau bước đi trên chặng đường hạnh phúc dành riêng cho chúng ta.',
  },
  {
    date: '2018',
    imgName: 'IMG_8568',
    content:
      'Kết thúc những năm tháng học trò, ta cùng nhau bước vào giảng đường đại học với biết bao ước mơ và hy vọng về tương lai. Vui có, buồn có, chia sẻ có, bất đồng có nhưng sau tất cả chúng ta vẫn bên cạnh nhau. Hạnh phúc là được đồng hành cùng nhau trong quãng thời gian đẹp nhất của tuổi trẻ.',
  },
  {
    date: '2022',
    imgName: 'z3745381529928_f4198f598ce43089bf2868ef6220372e',
    content:
      'Hành trình 4 năm đại học trôi qua không nhanh cũng không quá chậm, vừa vặn để ta cảm nhận được quãng thời gian thanh xuân cùng nhau trên giảng đường. Lời hứa tốt nghiệp cùng nhau cũng đã hoàn thành và cũng là ngày ta chính thức giới thiệu nhau với gia đình.',
  },
  {
    date: '24/12/2023',
    imgName: 'KTIU4104',
    content:
      'Cuối cùng thì ngày hôm nay cũng đã đến, ngày anh và em chính thức về chung một nhà. Hành trình 9 năm yêu nhau đã lưu giữ những kỉ niệm đẹp nhất của thanh xuân, và tiếp theo đây hành trình hôn nhân sẽ mang đến cho chúng ta một ý niệm khác về hạnh phúc, về những khoảnh khắc ý nghĩa bên nhau đi kèm với những trách nhiệm của một gia đình.',
  },
];

function StorySection() {
  return (
    <Section
      title={'Hành trình'}
      subTitle="Cuộc hành trình ngàn dặm bắt đầu bằng một bước."
      className="bg-white"
    >
      <OptimalImage
        alt="Background image"
        src={`/images/bg/pexels-craig-adderley-154690.jpg`}
        quality={80}
        className="object-cover absolute top-0 left-0 right-0 bottom-0"
        sizes="100vw"
      />
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
          loop={true}
          navigation={{
            enabled: true,
            prevEl: '.button-prev',
            nextEl: '.button-next',
          }}
          className="w-full h-[90vh]"
        >
          {stories.map((story: Story, idx: number) => (
            <SwiperSlide
              key={story.date}
              className="rounded-md overflow-hidden"
            >
              <div
                className={`grid gap-2 grid-cols-1 sm:grid-cols-2 grid-rows-1 h-full relative`}
              >
                <OptimalImage
                  fill
                  alt="Background image"
                  src={`/images/story/${story.imgName}.JPG`}
                  quality={10}
                  className="object-cover -z-50 absolute top-0 left-0 right-0 bottom-0 blur-md"
                  sizes="50vw"
                />
                <div className="relative grow">
                  <OptimalImage
                    alt="Main carousel image"
                    src={`/images/story/${story.imgName}.JPG`}
                    quality={100}
                    sizes="30vw"
                    className="object-contain rounded-lg"
                  />
                </div>

                <div className="p-4 grow-0 flex flex-col justify-center">
                  <h1
                    className={`text-2xl sm:text-3xl font-bold text-primary drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)]`}
                  >
                    {story.date}
                  </h1>
                  <p className={`overflow-hidden text-base mt-4`}>
                    {story.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1/2 translate-y-1/2 right-5 sm:bottom-5 sm:translate-y-0  z-50 flex flex-col">
          <button className="flex justify-center button-prev p-3 text-primary bg-white rounded-full">
            <IoChevronUp className="text-primary" />
          </button>
          <p className="paginationFraction text mt-4 mb-4"></p>
          <button className="flex justify-center button-next p-3 text-primary bg-white rounded-full">
            <IoChevronDown className="text-primary" />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default StorySection;
