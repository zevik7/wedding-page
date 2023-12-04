'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FlashLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      className="relative h-full w-full"
    >
      <div className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center">
        <Image
          className="object-contain"
          width={250}
          height={100}
          src={'images/decoration/heartBeat.svg'}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default React.memo(FlashLoading);
