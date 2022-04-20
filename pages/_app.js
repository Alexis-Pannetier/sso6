import "../res/styles/globals.css";

import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="sso6, single, sign-on" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="SSO6" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sso6.herokuapp.com" />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:image"
          content="https://sso6.herokuapp.com/sausage.gif"
        />
        <meta
          property="og:video"
          content="https://sso6.herokuapp.com/sausage.gif"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sso6.herokuapp.com" />
        <meta property="twitter:title" content="SSO6" />
        <meta
          name="twitter:image"
          content="https://sso6.herokuapp.com/sausage.gif"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
