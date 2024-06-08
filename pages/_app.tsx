// @ts-nocheck
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import {NextIntlClientProvider} from 'next-intl';

// import { appWithTranslation } from 'next-i18next';

import React, { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container"
import type { AppProps } from 'next/app'
import Head from "next/head";

// @reduxjs/toolkit global state management
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'redux/store/rootReducer';

// components and styles 
import Navbar from "components/Navbar"
import '../styles/globals.css'
// import 'styles/stars.css'

// utils
import { ImgProvider } from 'Contexts/Img';
import { StocksProvider } from 'Contexts/StocksContext'

// allows store={store} in the redux <Provider> wrapper. 
  const store = configureStore({
    reducer: rootReducer,
  }); 
  
  export default function App({ Component, pageProps, context }: AppProps) {
    const router = useRouter();
    
    // next-i18n code
    const userTimeZone:string = typeof window !== 'undefined' ? Intl.DateTimeFormat()?.resolvedOptions()?.timeZone : 'America/New_York';
    const locale:string = router?.locale || 'en'
    // const locale:string = 'en'


    return (
      <Container>

        {/* Redux Provider */}
      <Provider store={store}>          
      <ImgProvider>
        {/* <LanguageProvider> */}

        <StocksProvider>
      <NextIntlClientProvider
      locale={locale}
      // locale={router?.locale}
      timeZone={userTimeZone}
      messages={pageProps.messages || 'that was ez!' }
      >

      <Component {...pageProps} locale={router?.locale} />

      </NextIntlClientProvider>
      
        </StocksProvider>                  
          </ImgProvider>

      </Provider>

      </Container>    
    )
  
  }  

  // export default appWithTranslation(App);
