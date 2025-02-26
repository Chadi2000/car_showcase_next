"use client";
import Hero from '../public/hero.png'
import { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';


interface CarCardProps{
    car:CarProps;
}

const CarCard = ({car}: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg,year);
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
            {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
            $
        </span>
        {carRent}
        <span className='self-end text-[14px] font-medium'>
            /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={Hero}  alt='car model' fill priority
        className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
            <div className='flex flex-col justify-center items-center gap-2 h-auto'>
                <Image src="/steering-wheel.svg" width={200} height={20} alt='steering wheel' />
                <p className='text-[14px]'>
                    {transmission === 'a' ? 'Automatic' : 'Manual'}
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard
