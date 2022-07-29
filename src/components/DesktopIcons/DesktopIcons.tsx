import React from 'react';

import * as Icons from '@/components/Icons/Icons';

const DesktopIcons = () => {
  return (
    <div className='ml-auto hidden items-center md:flex'>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.HashtagWithSpeechBubble className='mx-2 h-6 w-6' />
      </button>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.Bell className='mx-2 h-6 w-6' />
      </button>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.Pin className='mx-2 h-6 w-6' />
      </button>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.People className='mx-2 h-6 w-6' />
      </button>
      <div className='relative mx-2'>
        <input
          type='text'
          className='h-6 w-36 rounded border-none bg-gray-900 px-1.5 text-sm font-medium'
          placeholder='Search'
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <Icons.Spyglass className='mr-1.5 h-4 w-4 text-gray-400' />
        </div>
      </div>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.Inbox className='mx-2 h-6 w-6' />
      </button>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.QuestionCircle className='mx-2 h-6 w-6' />
      </button>
    </div>
  );
};

export default DesktopIcons;
