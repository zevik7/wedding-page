'use client';
import { memo } from 'react';
import OptimalImage from '../OptimalImage';
import { ephesis } from '@/app/fonts';
import { motion } from 'framer-motion';

const ThankYouSection = () => {
  return (
    <div className="relative min-h-screen flex flex-row justify-center items-center overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 30 }}
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 1.5 },
        }}
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <OptimalImage
          alt="Background image"
          src={`/images/rght/z4786416031014_cb092759fe0189be1f7d5c2dfd22f2e0.jpg`}
          quality={100}
          className="object-cover -z-10 object-center sm:object-bottom"
          sizes="100vw"
          fill
        />
      </motion.div>
      <div className="relative py-10">
        <p
          className={
            'text-5xl sm:text-6xl text-center text-white ' + ephesis.className
          }
        >
          Thiên Phú
          <br />
          &
          <br />
          Phương Vy
          <br />9 years
        </p>

        <OptimalImage
          src={'images/decoration/leafPurple.svg'}
          alt=""
          width={200}
          height={100}
          className="absolute w-[120px] h-full -left-[100px] -top-[0px] -rotate-[130deg]"
          sizes="20vw"
        />
        <OptimalImage
          src={'images/decoration/leafPurple.svg'}
          alt=""
          width={200}
          height={100}
          className="absolute w-[120px] h-full -right-[100px] -top-[0px] rotate-[40deg]"
          sizes="20vw"
        />
      </div>
    </div>
  );
};

export default memo(ThankYouSection);
