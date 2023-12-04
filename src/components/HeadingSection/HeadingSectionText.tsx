'use client';

import React, { memo } from 'react';
import Countdown from '../Countdown';
import { ephesis } from '@/app/fonts';
import { motion } from 'framer-motion';

const HeadingSectionText = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.5 }}
      variants={{
        visible: { opacity: 1, top: 0 },
        hidden: { opacity: 0, top: -400 },
      }}
      className="relative"
    >
      <div className=" text-white">
        <h1 className={'text-lg sm:text-xl text-center p-4'}>Save the date</h1>
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
  );
};

export default memo(HeadingSectionText);
