/* eslint-disable no-underscore-dangle */
import Head from 'next/head'
import 'twin.macro'
import Layout from './Layout'
import Footer from './modules/Footer'
import Header from './modules/Header'
import Slice from './slices'

export default function Page({ header, footer, page, isHome = false }) {
  return (
    <Layout>
      <Head>
        <title>
          {isHome
            ? `CanU Canada | ${page.title}`
            : `${page.title} | CanU Canada`}
        </title>
        {page.description && (
          <meta name='description' content={page.description} />
        )}
      </Head>
      <Header header={header} />
      <main tw='flex-1'>
        {page.slices.map((slice) => {
          return (
            <Slice key={`${slice.__component}.${slice.id}`} slice={slice} />
          )
        })}
      </main>
      <Footer footer={footer} />
    </Layout>
  )
}
