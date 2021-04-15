import Head from 'next/head'
import 'twin.macro'
import Layout from '../Layout'
import Hero from '../modules/Hero'

export default function Page({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Head>
        <title>{`${page.title} | ${site.name}`}</title>
      </Head>
      <Hero image={page.bannerImage}>
        <h1 tw='block font-bold text-4xl lg:text-6xl'>{page.heading}</h1>
      </Hero>
    </Layout>
  )
}
