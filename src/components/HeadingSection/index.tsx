'use client';
import React from 'react';
import Calendar from '../Calendar';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils';
import OptimalImage from '../OptimalImage';
import SnowFallBackground from '../SnowFallBackground';
import { TbHeart, TbHeartFilled } from 'react-icons/tb';

const HeadingSection = () => {
  return (
    <div className="relative">
      <div className="w-full h-40 relative">
        <OptimalImage
          src={`/images/headingImg.webp`}
          alt="Heading image"
          priority
          quality={100}
          className="object-cover relative"
        />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center p-4 text-primary italic">
        THIÊN PHÚ
        <TbHeartFilled className="m-auto text-red-400" />
        PHƯƠNG VY
      </h1>
      <p className="m-4 text text text-center ">Ngày 24 tháng 11 2023</p>
      <div className="flex justify-center">
        <Countdown />
      </div>
    </div>
  );
};

export default HeadingSection;
