// eslint-disable-next-line @next/next/no-document-import-in-page
import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#f4f9fa" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
