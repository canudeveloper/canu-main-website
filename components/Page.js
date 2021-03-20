import Head from 'next/head'
import Layout from './Layout'

export default function Page({ nav, title, slug, description, robots }) {
  return (
    <Layout nav={nav}>
      <Head>
        <title>{slug !== 'home' ? `${title} | ` : ''}CanU Canada</title>
        {description && <meta name='description' content={description} />}
        {robots && <meta name='robots' content={robots} />}
      </Head>
    </Layout>
  )
}
