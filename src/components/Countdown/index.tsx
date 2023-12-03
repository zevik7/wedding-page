'use client';
import React, { memo, useEffect, useState } from 'react';
import './animated-border.css';

const Countdown = () => {
  const targetDate = new Date('2023-12-24T23:59:59').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      const calculatedDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const textNumStyle = `text-lg sm:text-xl md:text-2xl`;
  const textStringStyle = `text-sm sm:text-base md:text-lg`;

  return (
    <div className="grid grid-flow-col gap-5 sm:gap-10 text-center auto-cols-max">
      <div className="flex flex-col p-4 rounded-box animated-border">
        <span className={'countdown ' + textNumStyle}>
          <span
            style={
              {
                '--value': days < 10 ? '0' + days : days,
              } as React.CSSProperties
            }
          ></span>
        </span>
        <span className={textStringStyle}>ngày</span>
      </div>
      <div className="flex flex-col p-4 rounded-box animated-border">
        <span className={'countdown ' + textNumStyle}>
          <span
            style={
              {
                '--value': hours < 10 ? '0' + hours : hours,
              } as React.CSSProperties
            }
          ></span>
        </span>
        <span className={textStringStyle}>giờ</span>
      </div>
      <div className="flex flex-col p-4 rounded-box animated-border">
        <span className={'countdown ' + textNumStyle}>
          <span
            style={
              {
                '--value': minutes < 10 ? '0' + minutes : minutes,
              } as React.CSSProperties
            }
          ></span>
        </span>
        <span className={textStringStyle}>phút</span>
      </div>
      <div className="flex flex-col p-4 rounded-box animated-border">
        <span className={'countdown ' + textNumStyle}>
          <span
            style={
              {
                '--value': seconds < 10 ? '0' + seconds : seconds,
              } as React.CSSProperties
            }
          ></span>
        </span>
        <span className={textStringStyle}>giây</span>
      </div>
    </div>
  );
};

export default memo(Countdown);
