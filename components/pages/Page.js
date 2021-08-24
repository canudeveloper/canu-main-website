import Head from 'next/head'
import 'twin.macro'
import Layout from '../Layout'
import Slice from '../slices'

export default function Page({ header, footer, page }) {
  return (
    <Layout header={header} footer={footer} page={page}>
      <Head>
        <title>{`${page.title} | CanU Canada`}</title>
      </Head>
      {page.slices.map((slice) => {
        return <Slice key={slice.id} slice={slice} />
      })}
    </Layout>
  )
}
