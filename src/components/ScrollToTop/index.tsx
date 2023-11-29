'use client';

import React, { useState, useEffect, memo } from 'react';
import { TbArrowBigUpLine } from 'react-icons/tb';
import { motion } from 'framer-motion';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Show the "Scroll to Top" button when the user scrolls down 100px or more
        setIsVisible(true);
      } else {
        // Hide the button when the user is at the top of the page
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      className={`fixed bottom-5 right-5 z-50`}
    >
      <button
        onClick={scrollToTop}
        className="p-2 bg-white rounded-full shadow-sm border-2 outline-none"
      >
        <TbArrowBigUpLine className="text-primary" />
      </button>
    </motion.div>
  );
}

export default memo(ScrollToTopButton);
