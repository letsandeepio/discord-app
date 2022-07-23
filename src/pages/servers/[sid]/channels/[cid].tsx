import { useRouter } from 'next/router';
import React, { useState } from 'react';

import ChannelLink from '@/components/ChannelLink';
import * as Icons from '@/components/Icons/Icons';

import mockData from '../../../../../public/data.json';

const data: DataInterface = mockData;

export interface Server {
  label: string;
  categories: Category[];
}

export interface Category {
  id: number;
  label: string;
  channels: IChannel[];
}

export interface IChannel {
  id: number;
  label: string;
  icon?: string;
  unread?: boolean;
}

interface DataInterface {
  [key: string]: Server;
}

export default function Server() {
  const [closedCategories, setClosedCategories] = useState<string[]>([]);

  const router = useRouter();

  const server = data[`${router.query.sid}`];

  const channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => `${channel.id}` === `${router?.query?.cid}`) ?? {
    label: '',
  };

  const toggleCategory = (categoryId: string) => {
    setClosedCategories((prev) =>
      prev.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
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
                <button
                  className='flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100'
                  onClick={() => toggleCategory(`${category.id}`)}
                >
                  <Icons.ArrowIcon
                    className={`transition-0 mr-0.5 h-3 w-3 duration-200  ${
                      closedCategories.includes(`${category.id}`)
                        ? '-rotate-90'
                        : ''
                    }`}
                  />
                  {category.label}
                </button>
              )}

              <div className='mt-[5px] space-y-0.5'>
                {category.channels
                  .filter((channel: any) => {
                    const categoryOpen = !closedCategories.includes(
                      `${category.id}`
                    );

                    return categoryOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink channel={channel} key={channel.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-3 shadow-sm'>
          {channel?.label}
        </div>
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
}
