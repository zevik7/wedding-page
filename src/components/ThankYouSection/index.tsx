import React, { memo } from 'react';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import OptimalImage from '../OptimalImage';
import TitleSection from '../TitleSection';
import { LuCalendarHeart, LuMapPin } from 'react-icons/lu';
import { MdOutlineLocationOn } from 'react-icons/md';
import NeelaBorder from '../NeelaBorder';
import { LiaHatCowboySolid } from 'react-icons/lia';
import Link from 'next/link';
import { ephesis } from '@/app/fonts';

const ThankYouSection = () => {
  return (
    <div className="bg-primary bg-opacity-80 flex flex-row justify-center">
      <div className="relative py-10">
        <p
          className={
            'text-3xl sm:text-5xl text-center text-white ' + ephesis.className
          }
        >
          Thiên Phú
          <br />
          &
          <br />
          Phương Vy
        </p>

        <OptimalImage
          src={'images/decoration/leafPurple.svg'}
          alt=""
          width={200}
          height={100}
          className="absolute w-[90px] h-full -left-[90px] -top-[0px] -rotate-[130deg]"
        />
        <OptimalImage
          src={'images/decoration/leafPurple.svg'}
          alt=""
          width={200}
          height={100}
          className="absolute w-[90px] h-full -right-[90px] -top-[0px] rotate-[40deg]"
        />
      </div>
    </div>
  );
};

export default memo(ThankYouSection);
