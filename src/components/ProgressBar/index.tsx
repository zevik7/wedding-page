'use client';
import { memo } from 'react';
import { motion, useScroll } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default memo(ProgressBar);
