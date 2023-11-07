'use client';

import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLine } from 'react-icons/tb';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className="fixed bottom-5 right-5 z-10">
      <button
        onClick={scrollToTop}
        className="p-2 bg-white rounded-full border-primary border-[1] outline-none"
      >
        <TbArrowBigUpLine className="text-primary" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
