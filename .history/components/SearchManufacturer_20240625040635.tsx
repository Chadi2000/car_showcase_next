"use client";

import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import React from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
