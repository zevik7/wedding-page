import { memo } from 'react';
import OptimalImage from '../OptimalImage';
import { ephesis } from '@/app/fonts';

const ThankYouSection = () => {
  return (
    <div className="relative min-h-screen bg-primary bg-opacity-80 flex flex-row justify-center items-center">
      <OptimalImage
        fill
        alt="Background image"
        src={`/images/rght/z4786416031014_cb092759fe0189be1f7d5c2dfd22f2e0.jpg`}
        quality={60}
        className="object-cover -z-10 object-center sm:object-bottom"
        sizes="100vw"
      />
      <div className="relative py-10">
        <p
          className={
            'text-4xl sm:text-5xl text-center text-white ' + ephesis.className
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
