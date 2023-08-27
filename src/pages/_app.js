import React from 'react';
import AppHeader from '@/components/appHeader/AppHeader';

import '@/style/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
      // <React.StrictMode>
      <>
        <AppHeader/>
        <Component {...pageProps} />
      </>
      /* </React.StrictMode> */
    );
}
  
export default MyApp;