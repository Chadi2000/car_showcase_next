'use client';

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title,containerStyles, handleClick }:CustomButtonProps) => {
  return (
    <button
    disabled={false} type={"button"} className={`custom-btn`}
    onClick={() => {}}
    >
      <span className={'flex-1'}>
        Title
      </span>
    </button>
  )
}

export default CustomButton
