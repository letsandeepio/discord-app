/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Message = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-700 text-white'>
      <div className='max-w-lg'>
        <div className='flex px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
          <img
            className='mr-4 h-10 w-10 rounded-full'
            src='/profile.jpeg'
            alt=''
          />
          <div>
            <p className='flex items-baseline'>
              <span className='mr-2 text-sm font-medium text-green-600'>
                adamwathan
              </span>
              <span className='text-xs text-gray-500'>01/15/2021</span>
            </p>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              odio natus hic quibusdam? Vitae reiciendis obcaecati quaerat rerum
              distinctio dicta adipisci praesentium voluptate aliquid aspernatur
              accusamus, pariatur inventore, aliquam esse.
            </p>
          </div>
        </div>
        <div className='mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
          <p className='pl-14 text-gray-300'>
            This is another example. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Totam perspiciatis odit nesciunt obcaecati unde,
            rerum fugiat eaque, minus dolorem quam excepturi saepe dolore
            exercitationem in voluptatum corrupti atque. Dolorum, velit!
          </p>
        </div>
        <div className='mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30'>
          <p className='pl-14 text-gray-300'>
            o natus hic quibusdam? Vitae reiciendis obcaecati quaerat rerum
            distinctio dicta adipisci praesentium voluptate aliquid aspernatur
            accusamus, pariatur inventore, al
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
