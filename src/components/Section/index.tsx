import React, { HTMLProps } from 'react';
import OptimalImage from '../OptimalImage';

export type Props = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  className?: string;
  titleStyle?: React.ComponentProps<'h1'>['className'];
  subTitleStyle?: React.ComponentProps<'p'>['className'];
};

const Section = (props: Props) => {
  return (
    <div
      className={
        `bg-slate-200 px-4 py-8 sm:p-8 md:p-16 gradient-radial relative ` +
        props.className
      }
    >
      <h1
        className={
          'relative z-10 text-4xl font-bold text text-center text-primary ' +
          props.titleStyle
        }
      >
        {props.title}
      </h1>
      <p
        className={
          'relative z-10 m-4 text-base text text-center italic ' +
          props.subTitleStyle
        }
      >
        {props.subTitle}
      </p>
      <div className="pt-10">{props.children}</div>
    </div>
  );
};

export default Section;
