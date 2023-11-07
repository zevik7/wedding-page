'use client';
import React, { useEffect, useState } from 'react';
import { TbMusic, TbMusicOff } from 'react-icons/tb';
import './style.css';

const BackgroundMusicButton = () => {
  const [audio] = useState(
    typeof window !== 'undefined' ? new Audio('/musics/I Do - 911.mp3') : null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audio) return;
    if (audio && isPlaying) {
      audio.play();
    } else {
      audio?.pause();
    }
  }, [isPlaying, audio]);

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-2 bg-primary rounded-full border-base-100 outline-none"
      >
        {isPlaying ? <TbMusicOff color="#fff" /> : <TbMusic color="#fff" />}
        <div className="waves wave-1"></div>
        <div className="waves wave-2"></div>
        <div className="waves wave-3"></div>
      </button>
    </div>
  );
};

export default BackgroundMusicButton;
