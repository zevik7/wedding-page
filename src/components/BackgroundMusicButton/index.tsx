'use client';
import React, { memo, useEffect, useState } from 'react';
import { TbLoader, TbLoader2, TbMusic, TbMusicOff } from 'react-icons/tb';
import './style.css';
import useSWR from 'swr';
import { fetcher } from '@/utils';

const BackgroundMusicButton = () => {
  const { data, isLoading } = useSWR<string[]>('/api/musics', fetcher);
  const [audioList, setAudioList] = useState<string[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const getRandomTrackIndex = () =>
    Math.floor(Math.random() * audioList.length);

  useEffect(() => {
    if (!isLoading && data && data.length > 0) {
      setAudioList(data);
      const randomTrackIndex = getRandomTrackIndex();
      setAudio(new Audio(data[randomTrackIndex]));
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (audio) {
      if (isPlaying) {
        audio.play().catch((error) => console.error('Playback error:', error));
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio) {
      audio.onended = () => {
        playNextTrack();
      };
    }
  }, [currentTrackIndex, audioList]);

  const playNextTrack = () => {
    const nextTrackIndex = (currentTrackIndex + 1) % audioList.length;
    setCurrentTrackIndex(nextTrackIndex);
    setAudio(new Audio(audioList[nextTrackIndex]));
    setIsPlaying(true);
  };

  const playRandomTrack = () => {
    if (audio) {
      audio.remove();
    }
    const randomTrackIndex: number = getRandomTrackIndex();
    setCurrentTrackIndex(randomTrackIndex);
    setAudio(new Audio(audioList[randomTrackIndex]));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center">
      <div className="relative inline-block">
        <button
          onClick={() => {
            if (!isPlaying) {
              playRandomTrack();
            } else {
              togglePlay();
            }
          }}
          className="p-2 bg-red-400 rounded-full border-base-100 outline-none"
        >
          {isLoading && <TbLoader color="#fff" />}
          {!isLoading &&
            (isPlaying ? (
              <TbMusicOff color="#fff" />
            ) : (
              <TbMusic color="#fff" />
            ))}
          <div className="waves wave-1"></div>
          <div className="waves wave-2"></div>
          <div className="waves wave-3"></div>
        </button>
      </div>
      <p className="text-sm text-red-400 ml-2 drop-shadow-[1px_1px_0px_rgba(255,255,255,1)]">
        {isPlaying ? '' : 'Nhấn để phát'}
      </p>
    </div>
  );
};

export default memo(BackgroundMusicButton);
