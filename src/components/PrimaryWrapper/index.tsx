import React from 'react'

export type Props = {
  children: React.ReactNode;
};

const PrimaryWrapper = (props: Props) => {
  return (
    <div className="p-10 bg-base-100 w-full h-full">
      {props.children}
    </div>

  )
}

export default PrimaryWrapper