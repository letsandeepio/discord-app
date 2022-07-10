import { AppProps } from 'next/app';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ fontFamily: 'Open Sans' }}>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
