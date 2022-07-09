import React from 'react';

const Home = () => {
  return (
    <div className='flex h-screen text-gray-100'>
      <div className='space-y-2 overflow-y-scroll bg-gray-900 p-3'>
        {[...Array(40)].map((_, index) => {
          return (
            <div
              key={index}
              className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800'
            >
              {index}
            </div>
          );
        })}
      </div>
      <div className='flex w-60 flex-col  bg-gray-800'>
        <div className='flex h-12 flex-shrink-0 items-center px-3 text-gray-300 shadow-md'>
          Tailwind CSS
        </div>
        <div className='flex-1 space-y-2 overflow-y-scroll p-3 text-gray-300'>
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
