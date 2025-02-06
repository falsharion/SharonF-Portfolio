import React from 'react';
import { BsStars } from "react-icons/bs";

const SectionHeader = ({ title, eyebrow, description }) => {
  return (
    <>
      <div className="flex justify-center pt-6">
        <span className='text-violet-200 pr-2'><BsStars /></span>
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-violet-200 to-violet-600 md:text-xl text-transparent bg-clip-text">
          {eyebrow}
        </p>
        <span className='text-violet-200 pl-2'><BsStars /></span>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;