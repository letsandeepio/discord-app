import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import '@/styles/globals.css';

import DiscordLogo from '@/components/DiscordLogo';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex h-screen text-gray-100'>
        <div className='space-y-2 overflow-y-scroll bg-gray-900 p-3'>
          <Link href='/'>
            <a
              className={`${
                router.pathname === '/'
                  ? 'rounded-2xl bg-brand text-white'
                  : 'rounded-3xl bg-gray-700 text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white'
              } flex h-12 w-12 items-center justify-center  transition-all duration-200  `}
            >
              <DiscordLogo className='h-5 w-7' />
            </a>
          </Link>

          <Link href='/servers/1'>
            <a className='flex h-12 w-12 items-center justify-center rounded-3xl bg-gray-700 text-gray-100 transition-all duration-200 hover:rounded-2xl hover:bg-brand hover:text-white'>
              S1
            </a>
          </Link>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
