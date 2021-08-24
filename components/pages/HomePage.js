import Head from 'next/head'
import Layout from '../Layout'
import Slice from '../slices'

export default function HomePage({ header, footer, page }) {
  return (
    <Layout header={header} footer={footer} page={page}>
      <Head>
        <title>{`CanU Canada | ${page.title}`}</title>
      </Head>
      {page.slices.map((slice) => {
        return <Slice key={slice.id} slice={slice} />
      })}
    </Layout>
  )
}
