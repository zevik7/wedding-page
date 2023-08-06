import React from 'react'

export type Props = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
};

const Section = (props: Props) => {
  return (
    <div className="hero">
      <div className="hero-content pt-10 block">
        <h1 className="text-4xl font-bold text text-center">{props.title}</h1>
        <p className="m-4 text-base text text-center italic">{props.subTitle}</p>
        {props.children}
      </div>
    </div>

  )
}

export default Section