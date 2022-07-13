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
          <NavLink href='/servers/1'>SK</NavLink>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
