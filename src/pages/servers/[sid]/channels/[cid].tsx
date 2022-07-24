import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { data as mockData } from '@/data';

import ChannelLink from '@/components/ChannelLink';
import * as Icons from '@/components/Icons/Icons';

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
  description?: string;
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
    description: '',
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
            <Icons.Verified className='absolute h-4 w-4 text-gray-550' />
            <Icons.Check className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <Icons.Chevron className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>
        <div className='flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300'>
          {data['1'].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  className='flex w-full items-center px-0.5 font-title text-xs uppercase tracking-wide hover:text-gray-100'
                  onClick={() => toggleCategory(`${category.id}`)}
                >
                  <Icons.Arrow
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
      <div className='flex min-w-0 flex-1 flex-shrink flex-col bg-gray-700'>
        <div className='flex h-12 items-center px-3 shadow-sm'>
          <div className='flex items-center'>
            <Icons.Hashtag className='mx-2 h-6 w-6 font-semibold text-gray-400' />
            <span className='mr-2 font-title text-white'>{channel.label}</span>
          </div>

          {channel.description && (
            <>
              <div className='mx-2 h-6 w-px bg-white/[.06]'></div>
              <div className='mx-2 truncate text-sm font-medium text-gray-200'>
                {channel.description}
              </div>
            </>
          )}

          <div className='ml-auto flex items-center'>
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
            <div className='mx-2'>
              <input
                type='text'
                className='h-6 w-36 rounded border-none bg-gray-900 text-sm font-medium'
                placeholder='Search'
              />
            </div>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.Inbox className='mx-2 h-6 w-6' />
            </button>
            <button className='text-gray-200 hover:text-gray-100'>
              <Icons.QuestionCircle className='mx-2 h-6 w-6' />
            </button>
          </div>
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
