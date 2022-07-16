/* eslint-disable @next/next/no-img-element */
import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

import DiscordLogo from '@/components/DiscordLogo';
import NavLink from '@/components/Navlink/NavLink';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex h-screen text-gray-100'>
        <div className='space-y-2 overflow-y-scroll bg-gray-900 p-3'>
          <NavLink href='/'>
            <DiscordLogo className='h-5 w-7' />
          </NavLink>
          <hr className='mx-2 rounded border-t-2 border-t-white/[.06]' />
          <NavLink href='/servers/1'>
            <img src='/servers/tailwind.png' alt='' />
          </NavLink>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
