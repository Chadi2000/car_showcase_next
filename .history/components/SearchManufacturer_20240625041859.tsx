"use client";

import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import React from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className="absolute top-[14px]">
                <Image src="/car-logo.svg" width={20} height={20} 
                className='ml-4' alt='Car Logo' />
            </Combobox.Button>
            hello
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
