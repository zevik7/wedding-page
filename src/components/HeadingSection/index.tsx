'use client';
import React, { Suspense } from 'react';
import Calendar from '../Calendar';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils';
import OptimalImage from '../OptimalImage';
import SnowFallBackground from '../SnowFallBackground';
import { TbHeart, TbHeartFilled } from 'react-icons/tb';
import { ephesis } from '@/app/fonts';
import flowerLine from '../../../public/images/decoration/flowerLine.svg';

const HeadingSection = () => {
  return (
    <div className="relative py-10">
      <h1 className={'text-xl text-center p-4 text-primary'}>Save the date</h1>
      <h1
        className={
          'text-4xl sm:text-6xl text-center p-4 text-primary ' +
          ephesis.className
        }
      >
        Thiên Phú & Phương Vy
      </h1>
      <p className="m-4 text text text-center ">Ngày 24 tháng 11 2023</p>
      <div className="flex justify-center">
        <Countdown />
      </div>
      <div className="absolute w-[150px] h-full -left-[0px] sm:left-20 -top-[0px] -z-10 opacity-40">
        <OptimalImage src={flowerLine} alt="" />
      </div>
      <div className="absolute w-[150px] h-full -right-[0px] sm:right-20 -top-[0px] -z-10 opacity-40 rotate-180">
        <OptimalImage src={flowerLine} alt="" />
      </div>
    </div>
  );
};

export default HeadingSection;
