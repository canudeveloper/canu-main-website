import Head from 'next/head'
import Layout from '../Layout'

export default function Page({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Head>
        <title>{`${page.title} | ${site.name}`}</title>
      </Head>
    </Layout>
  )
}
