"use client";

import { CarProps } from '@/types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps{
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps
}

const CarDetails = ({isOpen, closeModel, car}: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
            <Transition.Child>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
