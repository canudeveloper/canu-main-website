import Head from 'next/head'
import Layout from '../Layout'
import HeroSlider from '../modules/HeroSlider'

export default function HomePage({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Head>
        <title>{`${site.name} | ${page.title}`}</title>
      </Head>
      <HeroSlider slides={page.heroSlider} />
    </Layout>
  )
}
