import React from 'react';

import DiscordLogo from '@/components/DiscordLogo';

const Home = () => {
  return (
    <div className='flex h-screen text-gray-100'>
      <div className='space-y-2 overflow-y-scroll bg-gray-900 p-3'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-100 transition duration-200 hover:rounded-2xl hover:bg-brand hover:text-white'>
          <DiscordLogo className='h-5 w-7' />
        </div>
        {/* {[...Array(40)].map((_, index) => {
          return (
            <div
              key={index}
              className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800'
            >
              {index}
            </div>
        })} */}
      </div>
      <div className='flex w-60 flex-col  bg-gray-800'>
        <div className='flex h-12 flex-shrink-0 items-center px-3 font-title font-bold shadow-md'>
          Tailwind CSS
        </div>
        <div className='flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300'>
          <p className='text-white'>channel (unread)</p>
          <p className='text-white'>channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p key={i}>channel {i}</p>
          ))}
        </div>
      </div>
      <div className='flex flex-1 flex-col bg-gray-700 '>
        <div className='h-12 items-center p-3 shadow-md'>General</div>
        <div className='flex-1  space-y-4 overflow-y-scroll p-3'>
          {[...Array(40)].map((_, index) => {
            return (
              <p key={index}>
                {index} - Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Cupiditate eveniet provident laboriosam debitis, nostrum
                repellendus, temporibus odio quo delectus, aut aliquam ea! Est
                accusamus non rerum iste omnis veniam quo?
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
