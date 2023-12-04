'use client';
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

const EventSection = () => {
  const renderEventCard = ({
    name,
    date,
    location,
    image,
    map,
  }: EventCardProps) => {
    return (
      <div className="p-6 mb-6 sm:p-8 sm:mb-8 bg-white">
        <NeelaBorder>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-items-center gap-2 sm:gap-4 px-6 py-4 sm:px-8 sm:py-6 bg-white">
            <div className="sm:col-span-1 relative aspect-square w-[200px] sm:max-w-full">
              <OptimalImage
                alt="Background image"
                src={image}
                quality={60}
                className="rounded-full aspect-square object-cover"
                sizes="30vw"
              />
            </div>

            <div className="sm:col-span-3">
              <h1 className="text-xl sm:text-2xl uppercase text-primary text-center sm:text-left flex flex-row">
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
              <Link
                className="py-2 px-4 bg-white text-primary text-sm font-bold border border-primary"
                href={map}
              >
                Xem bản đồ (xuất phát từ ĐHCT)
              </Link>
            </div>
          </div>
        </NeelaBorder>
      </div>
    );
  };

  return (
    <div className="relative py-16 sm:py-20">
      <OptimalImage
        alt="Background image"
        src={`/images/damNoi/IMG_0456.jpg`}
        quality={80}
        sizes="100vw"
        className="-z-10 object-cover opacity-80"
      />

      <div className="w-full max-w-screen-md m-auto">
        <div className="px-2 py-12 sm:py-16  sm:px-8 bg-primary bg-opacity-70 mx-2">
          <TitleSection content="Lễ cưới" whiteIcon className="text-white" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, bottom: 0 },
              hidden: { opacity: 0, bottom: -200 },
            }}
            className="relative"
          >
            <p className={`py-4 text-lg text-white text-center`}>
              Tới chung vui với tụi mình nha !
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, left: 0 },
              hidden: { opacity: 0, left: -200 },
            }}
            className="relative"
          >
            {renderEventCard({
              name: 'Nhà trai',
              date: '15h 22/12/23 (10/11 Âm lịch)',
              location:
                'Dốc cầu trầu hôi đường tỉnh 932, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
              map: 'https://maps.app.goo.gl/uPr5xJmCpgQTHyHu9',
              image: '/images/damNoi/IMG_0764.jpg',
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, right: 0 },
              hidden: { opacity: 0, right: -200 },
            }}
            className="relative"
          >
            {renderEventCard({
              name: 'Nhà gái',
              date: '15h 23/12/23 (11/11 Âm lịch)',
              location:
                'Ấp Nhơn Thuận 1B, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
              map: 'https://maps.app.goo.gl/dvXkTXYXXRCqkLiaA',
              image: '/images/damNoi/IMG_0595.jpg',
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, left: 0 },
              hidden: { opacity: 0, left: -200 },
            }}
            className="relative"
          >
            {renderEventCard({
              name: 'Nhà gái',
              date: '9h 24/12/23 (12/11 Âm lịch)',
              location:
                'Ấp Nhơn Thuận 1B, Nhơn Nghĩa A, Châu Thành A, Hậu Giang',
              map: 'https://maps.app.goo.gl/dvXkTXYXXRCqkLiaA',
              image: '/images/damNoi/IMG_0595.jpg',
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(EventSection);
