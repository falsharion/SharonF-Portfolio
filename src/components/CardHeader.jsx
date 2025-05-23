import React from 'react'
import StarIcon from '../assets/star';
import { twMerge } from 'tailwind-merge';

const CardHeader = ({title, description, className}) => {
  return (
    <div className={twMerge("flex flex-col p-6  md:py-8 md:px-10", className)}>
    <div className='inline-flex items-center gap-2'>
          <StarIcon />
          <h3 className='font-serif text-3xl'>
            {title}</h3></div>
          <p className='text-sm text-white/60 mt-2'>{description}</p>
        </div>
  )
}

export default CardHeader
