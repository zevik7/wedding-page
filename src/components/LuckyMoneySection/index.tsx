import OptimalImage from '../OptimalImage';
import TitleSection from '../TitleSection';
import { LuCalendarHeart, LuMapPin } from 'react-icons/lu';
import NeelaBorder from '../NeelaBorder';
import { LiaHatCowboySolid } from 'react-icons/lia';
import Link from 'next/link';
import { memo } from 'react';
import { motion } from 'framer-motion';

type EventCardProps = {
  name: string;
  date: string;
  location: string;
  map: string;
  image: string;
};

const LuckyMoneySection = () => {
  return (
    <div className="relative py-4 sm:py-8">
      <div className="w-full max-w-screen-md m-auto flex flex-row justify-center gap-5">
        <div className="flex flex-col items-center">
          <p className="text-base text-primary">Mừng cưới cô dâu</p>
          <OptimalImage
            src={'/images/decoration/bridgeQR.png'}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base text-primary">Mừng cưới chú rể</p>
          <OptimalImage
            src={'/images/decoration/groomQR.png'}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(LuckyMoneySection);
