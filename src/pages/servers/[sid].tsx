import React from 'react';

import {
  AddPersonIcon,
  BookIcon,
  CheckIcon,
  ChevronIcon,
  SpeakerphoneIcon,
  VerifiedIcon,
} from '@/components/Icons/Icons';

const Server1 = () => {
  return (
    <>
      <div className='flex w-60 flex-col bg-gray-800'>
        <button className='flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]'>
          <div className='relative mr-1 h-4 w-4'>
            <VerifiedIcon className='absolute h-4 w-4 text-gray-550' />
            <CheckIcon className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <ChevronIcon className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>
        <div className='mt-[17px] flex-1 overflow-y-scroll font-medium text-gray-300 '>
          <div className='space-y-0.5'>
            <a
              href='#'
              className='group mx-2 flex items-center rounded px-2  py-2 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100'
            >
              <BookIcon className='mr-1 h-5 w-5 text-gray-400' /> welcome
              <AddPersonIcon className='ml-auto h-4 w-4 text-gray-200 opacity-0 transition hover:text-gray-100 group-hover:opacity-100' />
            </a>
            <a
              href='#'
              className='group mx-2 flex items-center rounded px-2  py-2 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100'
            >
              <SpeakerphoneIcon className='mr-1 h-5 w-5 text-gray-400' />
              announcements
              <AddPersonIcon className='ml-auto h-4 w-4 text-gray-200 opacity-0 transition hover:text-gray-100 group-hover:opacity-100' />
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-3 shadow-sm'>general</div>
        <div className='flex-1 space-y-4 overflow-y-scroll p-3'>
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              Message {i}. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vel saepe laudantium sed reprehenderit incidunt! Hic rem
              quos reiciendis, fugit quae ratione beatae veniam laborum
              voluptatem, iusto dolorum, voluptates suscipit quia.
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Server1;
