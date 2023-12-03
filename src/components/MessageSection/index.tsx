import React, { memo } from 'react';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import OptimalImage from '../OptimalImage';
import { RiHeartsLine } from 'react-icons/ri';
import { ephesis } from '@/app/fonts';
import TitleSection from '../TitleSection';
import flower1 from '../../../public/images/decoration/flower-medium.svg';
import flower2 from '../../../public/images/decoration/flower-medium2.svg';

const MessageSection = () => {
  return (
    <>
      <div className="relative my-12 sm:my-16 m-auto">
        <div className="absolute w-[211px] h-[199px] sm:w-[424px] sm:h-[398px] -left-[100px] -top-[150px] -scale-y-100 rotate-90 -z-30">
          <OptimalImage src={flower1} alt="" />
        </div>
        <div className="absolute  w-[211px] h-[199px] sm:w-[424px] sm:h-[398px]  -right-[100px] -top-[0px] -z-30">
          <OptimalImage src={flower2} alt="" />
        </div>
        <TitleSection content="Cặp đôi" />
      </div>
      <div className="max-w-screen-md m-auto text-center mb-16 p-2">
        <div className="flex h-96 grid grid-cols-2 relative">
          <div className="relative border-4 sm:border-8 border-primary sm:mr-3 border-r-0">
            <div className="relative border-4 sm:border-8 border-white h-full">
              <OptimalImage
                src={'/images/file/KTIU3286.JPG'}
                alt="Bride"
                className="object-cover object-top"
                sizes="30vw"
              />
            </div>
          </div>
          <div className="relative border-4 sm:border-8 border-primary sm:ml-3">
            <div className="relative border-4 sm:border-8 border-white h-full">
              <OptimalImage
                src={'/images/file/KTIU4145.JPG'}
                alt="Groom"
                className="object-cover object-top"
                sizes="30vw"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 bg-white p-2 sm:p-5 rounded-full">
            <RiHeartsLine
              className="text-primary text-4xl sm:text-7xl font-light"
              width={1}
            />
          </div>
        </div>

        <h1 className={'mt-10 sm:mt-20 text-primary text-3xl font-bold '}>
          We are Getting Married
        </h1>
        <p className="mt-10 text-base opacity-70">
          Rất vui vì được chia sẻ niềm vui của ngày đặc biệt này với mọi người,
          đặc biệt là với bạn.
          <br />
          Chúng tôi chân thành biết ơn vì sự hiện diện và những lời chúc ý nghĩa
          mà bạn đã dành tặng.
          <br />
          Niềm hạnh phúc của chúng tôi trở nên trọn vẹn hơn khi có bạn ở bên
          cạnh.
          <br />
          Cảm ơn bạn rất nhiều!
        </p>
        <p
          className={
            'mt-10 text-3xl text-gray-500 font-thin italic ' + ephesis.className
          }
        >
          Thiên Phú & Phương Vy
        </p>
      </div>
    </>
  );
};

export default memo(MessageSection);
