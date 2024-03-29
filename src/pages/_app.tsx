/* eslint-disable @next/next/no-img-element */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import '@/styles/globals.css';

import { data as mockData } from '@/data';

import DiscordLogo from '@/components/DiscordLogo';
import NavLink from '@/components/Navlink/NavLink';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex h-screen text-gray-100'>
        <div className='hidden space-y-2 overflow-y-scroll bg-gray-900 p-3 md:block'>
          <NavLink href='/'>
            <DiscordLogo className='h-5 w-7' />
          </NavLink>
          <hr className='mx-2 rounded border-t-2 border-t-white/[.06]' />
          {mockData.map((server) => (
            <NavLink
              href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
              key={server.id}
              active={Number(router.query.sid) === +server.id}
            >
              <img src={`/servers/${server.img}`} alt='' />
            </NavLink>
          ))}
        </div>

        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
