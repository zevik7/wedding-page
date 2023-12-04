// @ts-nocheck
'use client';
import React, { memo, useEffect } from 'react';
import { gsap, Linear } from 'gsap';

const SnowFallBackground = () => {
  const MAX_SNOW = 30;
  const MAX_SNOW_SIZE = 10;
  const MAX_SNOW_SPEED = 2;

  useEffect(() => {
    const createSnows = () => {
      const container = document.getElementById('snow-animation-container');

      const changePosition = (item) => {
        const width = Math.floor(Math.random() * MAX_SNOW_SIZE);
        const height = width;
        const blur = Math.floor(Math.random() * 5 + 2);
        const left = Math.floor(Math.random() * (window.innerWidth - width));
        const top =
          -window.innerHeight +
          Math.floor(Math.random() * (window.innerHeight - height));

        item.style.width = `${width}px`;
        item.style.height = `${height}px`;
        item.style.marginLeft = `${left}px`;
        item.style.marginTop = `${top}px`;
        item.style.webkitFilter = `blur(${blur}px)`;
        item.style.mozFilter = `blur(${blur}px)`;
        item.style.oFilter = `blur(${blur}px)`;
        item.style.msFilter = `blur(${blur}px)`;
        item.style.filter = `blur(${blur}px)`;
      };

      const goAnimate = (item, id, randomTime) => {
        gsap.to(item, {
          duration: randomTime,
          marginTop: '+=100',
          ease: Linear.easeNone,
          onComplete: () => {
            const topPosition = parseFloat(
              item.style.marginTop.replace('px', '')
            );

            if (topPosition > window.innerHeight) {
              changePosition(item);
              randomTime = Math.random() * MAX_SNOW_SPEED;
              goAnimate(item, id, randomTime);
            } else {
              goAnimate(item, id, randomTime);
            }
          },
        });
      };

      const goAnimate2 = (item) => {
        const directionTime = 1 + Math.floor(Math.random() * 5);
        const randomDirection = 1 + Math.floor(Math.random() * 4);
        const delayTime = 1 + Math.floor(Math.random() * 3);

        const animateLeft = () => {
          gsap.to(item, {
            duration: directionTime,
            marginLeft: '+=100',
            ease: Linear.easeOut,
            onComplete: () => {
              gsap.to(item, {
                duration: directionTime,
                marginLeft: '-=100',
                delay: delayTime,
                ease: Linear.easeOut,
                onComplete: () => {
                  goAnimate2(item);
                },
              });
            },
          });
        };

        const animateRight = () => {
          gsap.to(item, {
            duration: directionTime,
            marginLeft: '-=100',
            ease: Linear.easeOut,
            onComplete: () => {
              gsap.to(item, {
                duration: directionTime,
                marginLeft: '+=100',
                delay: delayTime,
                ease: Linear.easeOut,
                onComplete: () => {
                  goAnimate2(item);
                },
              });
            },
          });
        };

        if (randomDirection === 1) {
          animateLeft();
        } else if (randomDirection === 2) {
          animateRight();
        } else if (randomDirection === 3) {
          gsap.to(item, {
            duration: directionTime,
            marginLeft: '+=100',
            ease: Linear.easeOut,
            onComplete: () => {
              goAnimate2(item);
            },
          });
        } else if (randomDirection === 4) {
          gsap.to(item, {
            duration: directionTime,
            marginLeft: '-=100',
            ease: Linear.easeOut,
            onComplete: () => {
              goAnimate2(item);
            },
          });
        }
      };

      const getRandomItem = (id) => {
        const width = Math.floor(Math.random() * MAX_SNOW_SIZE);
        const height = width;
        const blur = Math.floor(Math.random() * 5 + 2);
        const left = Math.floor(Math.random() * (window.innerWidth - width));
        const top =
          -window.innerHeight +
          Math.floor(Math.random() * (window.innerHeight - height));

        return getSmallSnow(width, height, blur, left, top, id);
      };

      const getSmallSnow = (width, height, blur, left, top, id) => {
        const div = document.createElement('div');
        div.className = `snow${id}`;
        div.style.position = 'absolute';
        div.style.marginLeft = `${left}px`;
        div.style.marginTop = `${top}px`;
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.borderRadius = '50%';
        div.style.backgroundColor = 'white';
        div.style.webkitFilter = `blur(${blur}px)`;
        div.style.mozFilter = `blur(${blur}px)`;
        div.style.oFilter = `blur(${blur}px)`;
        div.style.msFilter = `blur(${blur}px)`;
        div.style.filter = `blur(${blur}px)`;

        return div;
      };

      for (let i = 0; i < MAX_SNOW; i++) {
        const appendItem = getRandomItem(i);
        container.appendChild(appendItem);

        const animateItem = document.querySelector(`.snow${i}`);
        const randomTime = Math.random() * MAX_SNOW_SPEED;
        goAnimate(animateItem, i, randomTime);
        goAnimate2(animateItem);
      }
    };

    createSnows();
  }, []);

  return (
    <div
      id="snow-animation-container"
      className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-10 pointer-events-none"
    ></div>
  );
};

export default memo(SnowFallBackground);
