import React from 'react';

const Home = () => {
  return (
    <>
      <div className='flex w-60 flex-col bg-gray-800'>
        <div className='flex h-12 items-center px-3 font-title font-semibold text-white shadow-sm'>
          Dashboard
        </div>
        <div className='flex-1 space-y-2 overflow-y-scroll p-3 font-medium text-gray-300 '>
          <p className='text-white'>Friends</p>
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

export default Home;
