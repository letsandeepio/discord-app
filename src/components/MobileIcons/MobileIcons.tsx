import React from 'react';

import * as Icons from '@/components/Icons/Icons';

const MobileIcons = () => {
  return (
    <div className='ml-auto flex items-center md:hidden'>
      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.HashtagWithSpeechBubble className='mx-2 h-6 w-6' />
      </button>

      <button className='text-gray-200 hover:text-gray-100'>
        <Icons.People className='mx-2 h-6 w-6' />
      </button>
    </div>
  );
};

export default MobileIcons;
