'use client';
import React from 'react';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const WeddingSection = () => {
  return (
    <Section
      title={'Lễ cưới'}
      subTitle={'Đánh dấu nơi chúng tôi bắt đầu hành trình mới.'}
    >
      <div className="p-5 flex justify-center">
        <Countdown />
      </div>
      <div className="w-96 h-96">
        {/* <Image
          fill
          priority
          alt="Invitation image"
          src={`/images/invitation.jpg`}
          style={{ objectFit: "cover" }}
          quality={100}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        /> */}
      </div>
    </Section>
  );
};

export default WeddingSection;
