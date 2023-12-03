import React, { memo } from 'react';
import OptimalImage from '../OptimalImage';
import titleDot from '../../../public/images/decoration/titleDot.svg';
import titleDotWhite from '../../../public/images/decoration/titleDotWhite.svg';

type Props = {
  content: string;
  className?: string;
  whiteIcon?: boolean;
};

const TitleSection = (props: Props) => {
  return (
    <>
      <h1
        className={
          'text-3xl sm:text-4xl font-bold text-center text-primary uppercase ' +
          props.className
        }
      >
        {props.content}
      </h1>
      <p className="relative h-4 sm:h-6">
        <OptimalImage src={props.whiteIcon ? titleDotWhite : titleDot} alt="" />
      </p>
    </>
  );
};

export default memo(TitleSection);
