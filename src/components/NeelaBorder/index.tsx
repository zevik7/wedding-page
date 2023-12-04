import React, { memo } from 'react';

type Props = {
  children: React.ReactNode;
  borderElementStyle?: string;
};

const NeelaBorder = (props: Props) => {
  return (
    <div className="relative">
      {props.children}
      <div
        className={
          'absolute top-0 bottom-0 -left-2 -right-2 border border-primary pointer-events-none ' +
          props.borderElementStyle
        }
      />
      <div
        className={
          'absolute -top-2 -bottom-2 left-0 right-0 border border-primary pointer-events-none ' +
          props.borderElementStyle
        }
      />
    </div>
  );
};

export default memo(NeelaBorder);
