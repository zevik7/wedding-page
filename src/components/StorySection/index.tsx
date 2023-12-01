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
import TitleSection from '../TitleSection';
import NeelaBorder from '../NeelaBorder';
import { GiDiamondRing } from 'react-icons/gi';
import { ephesis } from '@/app/fonts';
import flower1 from '../../../public/images/decoration/flower-medium.svg';
import flower2 from '../../../public/images/decoration/flower-medium2.svg';

type Story = {
  title: string;
  date: string;
  img: string;
  content: string;
};

const stories: Story[] = [
  {
    title: 'Ngày mình chung đôi',
    date: '06/02/2014',
    img: '/images/story/2014.jpg',
    content:
      'Hôm ấy là một ngày đặc biệt, ngày khởi đầu cho hành trình của anh và em. Tuy không phải là ngày đầu tiên gặp nhau nhưng là ngày đầu tiên em và anh cho nhau một cơ hội để được cùng nhau bước đi trên chặng đường hạnh phúc dành riêng cho chúng ta.',
  },
  {
    title: 'Vào đại học',
    date: '2018',
    img: '/images/story/IMG_9609_edited.jpg',
    content:
      'Kết thúc những năm tháng học trò, ta cùng nhau bước vào giảng đường đại học với biết bao ước mơ và hy vọng về tương lai. Vui có, buồn có, chia sẻ có, bất đồng có nhưng sau tất cả chúng ta vẫn bên cạnh nhau. Hạnh phúc là được đồng hành cùng nhau trong quãng thời gian đẹp nhất của tuổi trẻ.',
  },
  {
    title: 'Tốt nghiệp',
    date: '2022',
    img: '/images/story/z3745381529928_f4198f598ce43089bf2868ef6220372e.jpg',
    content:
      'Hành trình 4 năm đại học trôi qua không nhanh cũng không quá chậm, vừa vặn để ta cảm nhận được quãng thời gian thanh xuân cùng nhau trên giảng đường. Lời hứa tốt nghiệp cùng nhau cũng đã hoàn thành và cũng là ngày ta chính thức giới thiệu nhau với gia đình.',
  },
  {
    title: 'Chung một mái nhà',
    date: '24/12/2023',
    img: '/images/13.18/KTIU4071 13.18.JPG',
    content:
      'Cuối cùng thì ngày hôm nay cũng đã đến, ngày anh và em chính thức về chung một nhà. Hành trình 9 năm yêu nhau đã lưu giữ những kỉ niệm đẹp nhất của thanh xuân, và tiếp theo đây hành trình hôn nhân sẽ mang đến cho chúng ta một ý niệm khác về hạnh phúc, về những khoảnh khắc ý nghĩa bên nhau đi kèm với những trách nhiệm của một gia đình.',
  },
];

function StorySection() {
  return (
    <div>
      <div className="relative p-14 after:content-[''] after:bg-primary after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-70 after:-z-10 ">
        <TitleSection content="Hành trình" whiteIcon className="text-white" />
        <OptimalImage
          className="-z-10 object-cover"
          src={'/images/decoration/roses.jpg'}
          alt=""
          quality={40}
        />
      </div>
      <div className="max-w-screen-lg m-auto py-20">
        <div id="timeline" className="relative">
          {stories.map((story: Story, idx: number) => (
            <div key={story.date} className="flex flex-col items-center">
              <NeelaBorder>
                <p className="text-4xl text-primary font-light p-4 sm:p-6">
                  {story.date}
                </p>
              </NeelaBorder>
              <div
                className={`grid gap-2 grid-cols-1 sm:grid-cols-2 grid-rows-1 items-center h-full relative py-16`}
              >
                <div className="absolute w-[1px] bg-primary top-0 bottom-[5px] left-1/2" />

                <div className="relative w-[480px] aspect-[3/4] max-w-full  z-0 sm:left-20">
                  <OptimalImage
                    alt="Main carousel image"
                    src={`${story.img}`}
                    quality={100}
                    sizes="30vw"
                  />
                </div>

                <div className="max-w-xs relative sm:left-10 justify-self-center sm:justify-self-start">
                  <div className="bg-primary p-8 border-4 border-white">
                    <NeelaBorder borderElementStyle="border-secondary">
                      <div className="p-2 sm:p-4">
                        <TitleSection
                          content={story.title}
                          className="text-white text-xl"
                          whiteIcon={true}
                        />
                        <p className={`px-2 py-4 text-base text-white`}>
                          {story.content}
                        </p>
                      </div>
                    </NeelaBorder>
                  </div>
                </div>

                <div className="absolute w-[211px] h-[199px] sm:w-[424px] sm:h-[398px] -left-[100px] -top-[150px] -scale-y-100 rotate-90 -z-10">
                  <OptimalImage src={flower1} alt="" />
                </div>
                <div className="absolute  w-[211px] h-[199px] sm:w-[424px] sm:h-[398px]  -right-[100px] -top-[0px] -z-10">
                  <OptimalImage src={flower2} alt="" />
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center">
            <GiDiamondRing className="text-primary text-5xl" />
            <p
              className={
                'text-primary text-5xl text-center ' + ephesis.className
              }
            >
              This is where our forever begins !!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
