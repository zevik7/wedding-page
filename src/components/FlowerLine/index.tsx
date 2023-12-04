'use client';

import React, { memo } from 'react';
import OptimalImage from '../OptimalImage';
import flowerLine from '../../../public/images/decoration/flowerLine.svg';
import { motion } from 'framer-motion';

const FlowerLine = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1, rotate: 0 },
        hidden: { opacity: 0, scale: 0, rotate: 180 },
      }}
      className="relative h-full w-full"
    >
      <OptimalImage src={flowerLine} alt="" sizes="30vw" quality={70} />;
    </motion.div>
  );
};

export default memo(FlowerLine);
