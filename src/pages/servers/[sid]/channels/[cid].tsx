import { useRouter } from 'next/router';
import { useState } from 'react';

import { data as mockData } from '@/data';

import ChannelLink from '@/components/ChannelLink';
import DesktopIcons from '@/components/DesktopIcons/DesktopIcons';
import * as Icons from '@/components/Icons/Icons';
import Message from '@/components/Message/Message';
import MessageWithUser from '@/components/Message/MessageWithUser';
import MobileIcons from '@/components/MobileIcons/MobileIcons';

const data: Server[] = mockData;
export interface Server {
  id: number;
  label: string;
  img: string;
  categories: Category[];
}

export interface Category {
  id: number;
  label: string;
  channels: Channel[];
}

export interface Channel {
  id: number;
  label: string;
  description?: string;
  icon?: string;
  messages: Message[];
}

export interface Message {
  id: number;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
}

const Server = () => {
  const router = useRouter();

  const [closedCategories, setClosedCategories] = useState<string[]>([]);

  const server = data.find((server) => server.id == Number(router?.query?.sid));

  const channel = server?.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => channel.id === Number(router.query.cid));

  const toggleCategory = (categoryId: string) => {
    setClosedCategories((prev) =>
      prev.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  return (
    <>
      <div className='hidden w-60 flex-col bg-gray-800 md:flex'>
        <button className='flex h-12 items-center px-4 font-title text-[15px] font-semibold text-white shadow-sm transition hover:bg-gray-550/[0.16]'>
          <div className='relative mr-1 h-4 w-4'>
            <Icons.Verified className='absolute h-4 w-4 text-gray-550' />
            <Icons.Check className='absolute h-4 w-4' />
          </div>
          Tailwind CSS
          <Icons.Chevron className='ml-auto h-[18px] w-[18px] opacity-80' />
        </button>
        <div className='flex-1 space-y-[21px] overflow-y-scroll pt-3 font-medium text-gray-300'>
          {server?.categories.map((category) => (
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
            <span className=' mr-2 whitespace-nowrap font-title text-white'>
              {channel?.label}
            </span>
          </div>
          {channel?.description && (
            <>
              <div className='mx-2 hidden h-6 w-px bg-white/[.06] md:block'></div>
              <div className='mx-2 hidden truncate text-sm font-medium text-gray-200 md:block'>
                {channel.description}
              </div>
            </>
          )}
          {/* mobile icons */}
          <MobileIcons />
          {/* desktop icons */}
          <DesktopIcons />
        </div>
        <div className='flex-1 space-y-4 overflow-y-scroll p-3'>
          {channel?.messages.map((message: Message, i) => {
            return (
              <div key={message.id}>
                {i === 0 || message.user !== channel.messages[i - 1].user ? (
                  <MessageWithUser message={message} />
                ) : (
                  <Message message={message} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Server;
