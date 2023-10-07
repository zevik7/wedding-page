"use client"
import React, { useEffect, useState } from 'react';
import './animated-border.css';

const Countdown = () => {
  const targetDate = new Date('2023-12-31T23:59:59').getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      const calculatedDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const calculatedMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
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

  return (
    <div className="grid grid-flow-col gap-20 text-center auto-cols-max">
      <div className="flex flex-col p-16 rounded-box animated-border">
        <span className="countdown text-6xl">
          <span style={{ '--value': days < 10 ? '0' + days : days } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-16 rounded-box animated-border">
        <span className="countdown text-6xl">
          <span style={{ '--value': hours < 10 ? '0' + hours : hours } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-16 rounded-box animated-border">
        <span className="countdown text-6xl">
          <span style={{ '--value': minutes < 10 ? '0' + minutes : minutes } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-16 rounded-box animated-border">
        <span className="countdown text-6xl">
          <span style={{ '--value': seconds < 10 ? '0' + seconds : seconds } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
