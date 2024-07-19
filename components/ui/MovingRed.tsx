
import React from 'react';

const MovingRed = ({
  title, otherClasses
}: {
  title: string;  otherClasses?: string;
}) => {
  return (
    <button
    className="relative  inline-flex w-full
    overflow-hidden rounded-lg p-[2px]
    focus:outline-none  "
      
    >
      <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#900C3F_50%,#E2CBFF_100%)]" />
  <span className={`inline-flex items-center justify-center h-full w-full
  cursor-pointer 
  rounded-lg bg-slate-950 p-4  font-medium
   text-white backdrop-blur-3xl  text-center text-[20px] ${otherClasses}`}>
        {title}
      </span>
    </button>
  );
};

export default MovingRed;