'use client';
import React, { memo } from 'react';
import OptimalImage from '../OptimalImage';
import titleDot from '../../../public/images/decoration/titleDot.svg';
import titleDotWhite from '../../../public/images/decoration/titleDotWhite.svg';
import { motion } from 'framer-motion';

type Props = {
  content: string;
  className?: string;
  whiteIcon?: boolean;
};

const TitleSection = (props: Props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, top: 0 },
          hidden: { opacity: 0, top: -200 },
        }}
        className="relative h-full w-full"
      >
        <h1
          className={
            'text-3xl sm:text-4xl font-bold text-center text-primary uppercase ' +
            props.className
          }
        >
          {props.content}
        </h1>
        <p className="relative h-4 sm:h-6">
          <OptimalImage
            src={props.whiteIcon ? titleDotWhite : titleDot}
            alt=""
          />
        </p>
      </motion.div>
    </>
  );
};

export default memo(TitleSection);
