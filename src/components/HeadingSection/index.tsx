'use client';
import React, { memo } from 'react';
import Countdown from '../Countdown';
import OptimalImage from '../OptimalImage';
import { ephesis } from '@/app/fonts';
import flowerLine from '../../../public/images/decoration/flowerLine.svg';
import Carousel from '../Carousel';
import { motion } from 'framer-motion';

const HeadingSection = () => {
  return (
    <div className="relative h-screen py-5 sm:py-10 bg-primary bg-opacity-70 grid grid-cols-1 justify-items-center items-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-20">
        <Carousel />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="relative w-full"
      >
        <div className="absolute md:w-[150px] md:h-full md:left-20 md:rotate-0 md:opacity-100 md:translate-x-0 h-[80vw] w-[150px] left-1/2 top-0 opacity-40 rotate-90 -translate-x-1/2 scale-y-110">
          <OptimalImage src={flowerLine} alt="" sizes="30vw" />
        </div>
        <div className="absolute md:w-[150px] md:h-full md:right-20  md:opacity-100 md:translate-x-0 md:rotate-180 h-[80vw] w-[150px] right-1/2 bottom-0 opacity-40 -rotate-90 translate-x-1/2 scale-y-110">
          <OptimalImage src={flowerLine} alt="" sizes="30vw" />
        </div>

        <div className=" text-white">
          <h1 className={'text-lg sm:text-xl text-center p-4'}>
            Save the date
          </h1>
          <h1
            className={
              'text-4xl sm:text-6xl text-center p-4 ' + ephesis.className
            }
          >
            Thiên Phú & Phương Vy
          </h1>
          <p className="mb-2 text-center text-base">Ngày 24 tháng 11 2023</p>
          <p className="mb-5 text-center text-sm">12/11 âm lịch</p>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(HeadingSection);
