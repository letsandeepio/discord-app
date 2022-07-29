import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import * as Icons from '@/components/Icons/Icons';

enum Channel {
  ACTIVE = 'active',
  INACTIVE_READ = 'inactiveRead',
  INACTIVE_UNREAD = 'inactiveUnread',
}

interface ChannelLinkProps {
  channel: {
    id: number;
    label: string;
    unread?: boolean;
    icon?: string;
  };
}

const ChannelLink = ({ channel }: ChannelLinkProps) => {
  const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
  const router = useRouter();
  const active = +channel.id === Number(router?.query?.cid);

  const state = active
    ? Channel.ACTIVE
    : channel.unread
    ? Channel.INACTIVE_UNREAD
    : Channel.INACTIVE_READ;

  const classes = {
    [Channel.ACTIVE]: 'text-white bg-gray-550/[0.32]',
    [Channel.INACTIVE_UNREAD]:
      'text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
    [Channel.INACTIVE_READ]:
      'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]',
  };

  return (
    <Link href={`/servers/${router?.query?.sid}/channels/${channel.id}`}>
      <a
        className={`${classes[state]} group relative mx-2 flex items-center rounded  px-2 py-2`}
      >
        {state === Channel.INACTIVE_UNREAD && (
          <div className='absolute left-1 -ml-2 h-2 w-1 rounded-r-full bg-white'></div>
        )}
        {Icon && (
          <>
            <Icon className='mr-1 h-5 w-5 text-gray-400' /> {channel.label}
            <Icons.AddPerson className='ml-auto h-4 w-4 text-gray-200 opacity-0 transition hover:text-gray-100 group-hover:opacity-100' />
          </>
        )}
      </a>
    </Link>
  );
};

export default ChannelLink;
