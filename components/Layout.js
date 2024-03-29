import Head from 'next/head'
import 'twin.macro'

export default function Layout({ children }) {
  return (
    <div tw='flex flex-col min-h-screen font-sans'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#bb2025' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      {children}
    </div>
  )
}
