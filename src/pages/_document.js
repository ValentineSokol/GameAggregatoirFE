import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-100" lang="en">
      <Head>
          <link rel='icon' href='favicon.png' />
          <title>TotallyNotSteam</title>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
