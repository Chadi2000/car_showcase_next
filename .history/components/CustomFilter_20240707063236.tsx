"use client";
import {Fragment,useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFiltetProps } from '@/types';


const CustomFilter = ({title, options}: CustomFiltetProps ) => {
  const [ selected, setSelected ] = useState(options[0]);

  return (
    <div className='w-fit' onClick={() => console.log(options)}>
      <Listbox
        value={selected}
        onChange={(e)=>setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image src="/chevron-up-down.svg" width={20} height={20}
            className='ml-4 object-contain' alt='chevron up down' />
          </Listbox.Button>
          
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
