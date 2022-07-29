import React from 'react';

import { Message } from '@/pages/servers/[sid]/channels/[cid]';

const MessageWithUser = ({ message }: { message: Message }) => {
  return (
    <div className='mt-[17px] flex py-0.5 pl-4 pr-16 leading-[22px] hover:bg-gray-950/[.07]'>
      <img
        className='mr-4 h-10 w-10 rounded-full'
        src={message.avatarUrl}
        alt=''
      />
      <div>
        <p className='flex items-baseline'>
          <span className='mr-2 text-sm font-medium text-green-600'>
            {message.user}
          </span>
          <span className='text-xs text-gray-500'>{message.date}</span>
        </p>
        <p className='text-gray-100'>{message.text}</p>
      </div>
    </div>
  );
};

export default MessageWithUser;
