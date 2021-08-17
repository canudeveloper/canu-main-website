import Head from 'next/head'
import Layout from '../Layout'
import HeroSlider from '../modules/HeroSlider'
import Section from '../sections'

export default function HomePage({ site, page }) {
  return (
    <Layout site={site} page={page}>
      <Head>
        <title>{`${site.name} | ${page.title}`}</title>
      </Head>
      <HeroSlider slides={page.heroSlider} />
      {page.sections.map(({ fields, sys }) => {
        return (
          <Section key={sys.id} type={sys.contentType.sys.id} fields={fields} />
        )
      })}
    </Layout>
  )
}
