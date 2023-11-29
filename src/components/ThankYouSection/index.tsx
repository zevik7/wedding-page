import React from 'react';
import Calendar from '../Calendar';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import OptimalImage from '../OptimalImage';
import TitleSection from '../TitleSection';
import { LuCalendarHeart, LuMapPin } from 'react-icons/lu';
import { MdOutlineLocationOn } from 'react-icons/md';
import NeelaBorder from '../NeelaBorder';
import { LiaHatCowboySolid } from 'react-icons/lia';

type EventCard = {
  name: string;
  date: string;
  location: string;
};

const ThankYouSection = () => {
  const renderEventCard = ({ name, date, location }: EventCard) => {
    return (
      <div className="p-8 mb-8 bg-white">
        <NeelaBorder>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-items-center gap-2 px-8 py-6 bg-white">
            <div className="sm:col-span-1 relative aspect-square w-[200px] sm:max-w-full">
              <OptimalImage
                alt="Background image"
                src={`/images/13.18/KTIU3182 13.18.JPG`}
                quality={70}
                className="rounded-full aspect-square object-cover"
                sizes="99vw"
              />
            </div>

            <div className="sm:col-span-3">
              <h1 className="text-2xl uppercase text-primary text-center sm:text-left flex flex-row">
                <LiaHatCowboySolid className="text-3xl mr-2" />
                {name}
              </h1>
              <div className="py-1" />
              <div className="flex flex-row items-center">
                <LuCalendarHeart className="text-primary text-2xl mr-2" />
                <p className="text-base text-primary">{date}</p>
              </div>
              <div className="py-1" />
              <div className="flex flex-row items-center">
                <LuMapPin className="text-primary text-5xl sm:text-4xl mr-2" />
                <p className="text-sm text-primary">{location}</p>
              </div>
              <div className="py-1" />
            </div>
            <div className="col-span-full m-auto flex justify-end">
              <button
                type="button"
                className="py-2 px-4 bg-white text-primary text-base font-bold border border-primary"
              >
                Xem bản đồ
              </button>
            </div>
          </div>
        </NeelaBorder>
      </div>
    );
  };

  return (
    <div className="relative py-20">
      <OptimalImage
        alt="Background image"
        src={`/images/damNoi/IMG_1212.jpg`}
        quality={75}
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <div className="w-full max-w-screen-md m-auto">
        <div className="py-6 px-4 sm:py-12 sm:px-8 bg-primary bg-opacity-60">
          <TitleSection content="Lễ cưới" whiteIcon className="text-white" />
          <p className={`px-2 py-4 text-xl text-white text-center`}>
            Rồi tới luôn !!!
          </p>

          {renderEventCard({
            name: 'Nhà trai',
            date: '15h 22/12/23 (10/11 Âm lịch)',
            location:
              'Dốc cầu trầu hôi đường tỉnh 932, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
          })}

          {renderEventCard({
            name: 'Nhà gái',
            date: '15h 23/12/23 (12/11 Âm lịch)',
            location: 'Ấp Nhơn Thuận 1B, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
          })}

          {renderEventCard({
            name: 'Nhà gái',
            date: '9h 24/12/23 (12/11 Âm lịch)',
            location: 'Ấp Nhơn Thuận 1B, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
          })}
        </div>
      </div>
    </div>
  );
};

export default ThankYouSection;
