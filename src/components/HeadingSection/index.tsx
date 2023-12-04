import React, { memo } from 'react';
import Countdown from '../Countdown';
import OptimalImage from '../OptimalImage';
import { ephesis } from '@/app/fonts';
import Carousel from '../Carousel';
import HeadingSectionText from './HeadingSectionText';
import FlowerLine from '../FlowerLine';

const HeadingSection = () => {
  return (
    <div className="relative h-screen py-5 sm:py-10 bg-primary bg-opacity-70 grid grid-cols-1 justify-items-center items-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20">
        <Carousel />
      </div>

      <div className="absolute md:w-[150px] md:h-full md:left-20 md:rotate-0 md:opacity-100 md:translate-x-0 h-[80vw] w-[150px] left-1/2 top-0 opacity-40 rotate-90 -translate-x-1/2 scale-y-110">
        <FlowerLine />
      </div>
      <div className="absolute md:w-[150px] md:h-full md:right-20  md:opacity-100 md:translate-x-0 md:rotate-180 h-[80vw] w-[150px] right-1/2 bottom-0 opacity-40 -rotate-90 translate-x-1/2 scale-y-110">
        <FlowerLine />
      </div>

      <HeadingSectionText />
    </div>
  );
};

export default memo(HeadingSection);
