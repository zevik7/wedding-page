import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const NeelaBorder = (props: Props) => {
  return (
    <div className="relative inline-block m-auto px-4 py-2">
      <p className="text-4xl text-primary font-light">{props.children}</p>
      <div
        className={
          'absolute top-0 bottom-0 -left-1.5 -right-1.5 border border-primary ' +
          props.className
        }
      />
      <div
        className={
          'absolute -top-1.5 -bottom-1.5 left-0 right-0 border border-primary ' +
          props.className
        }
      />
    </div>
  );
};

export default NeelaBorder;
