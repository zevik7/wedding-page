import React from 'react';
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
    <div>
      <h1
        className={
          'my-4 text-4xl font-bold text text-center text-primary ' +
          props.className
        }
      >
        {props.content}
      </h1>
      <div className="relative h-6">
        <OptimalImage src={props.whiteIcon ? titleDotWhite : titleDot} alt="" />
      </div>
    </div>
  );
};

export default TitleSection;
