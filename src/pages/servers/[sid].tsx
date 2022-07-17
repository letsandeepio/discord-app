import React from 'react';

import * as Icons from '@/components/Icons/Icons';

import data from '../../../public/data.json';

type json = { [key: string]: any };

const Server1 = () => {
  return (
    <>
      <div className='flex w-60 flex-col bg-gray-800'>
        <button className='flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]'>
          <div className='relative mr-1 h-4 w-4'>
            <Icons.VerifiedIcon className='absolute h-4 w-4 text-gray-550' />
            <Icons.CheckIcon className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <Icons.ChevronIcon className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>
        <div className='flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300'>
          {data['1'].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button className='flex items-center px-0.5 font-title text-xs uppercase tracking-wide'>
                  <Icons.ArrowIcon className='mr-0.5 h-3 w-3' />
                  {category.label}
                </button>
              )}

              <div className='mt-[5px] space-y-0.5'>
                {category.channels.map((channel) => (
                  <ChannelLink channel={channel} key={channel.id} />
                ))}
              </div>
            </div>
          ))}
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

interface ChannelLinkProps {
  channel: {
    id: number;
    label: string;
    icon?: string;
  };
}
const ChannelLink = ({ channel }: ChannelLinkProps) => {
  const Icon = channel.icon ? Icons[channel.icon] : Icons.HashtagIcon;

  return (
    <a
      key={channel.id}
      href='#'
      className='group mx-2 flex items-center rounded px-2  py-2 text-gray-300 hover:bg-gray-550/[0.16] hover:text-gray-100'
    >
      {Icon && (
        <>
          <Icon className='mr-1 h-5 w-5 text-gray-400' /> {channel.label}
          <Icons.AddPersonIcon className='ml-auto h-4 w-4 text-gray-200 opacity-0 transition hover:text-gray-100 group-hover:opacity-100' />
        </>
      )}
    </a>
  );
};

export default Server1;
