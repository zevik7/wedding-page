import React from 'react';
import Calendar from '../Calendar';
import Section from '../Section';
import Countdown from '../Countdown';
import PrimaryWrapper from '../PrimaryWrapper';
import Image from 'next/image';
import OptimalImage from '../OptimalImage';

const ThankYouSection = () => {
  return (
    <Section
      title="Thank you"
      subTitle="For spending time with us."
      className="pb-10"
    >
      <div className="relative">
        <OptimalImage
          alt="Background image"
          src={`/images/file/KTIU4078.JPG`}
          quality={70}
          sizes="100vw"
          className="m-auto rounded-full overflow-hidden"
          fill={false}
          height={700}
          width={300}
        />
      </div>
    </Section>
  );
};

export default ThankYouSection;
