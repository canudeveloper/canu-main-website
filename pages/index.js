import Page from '../components/Page'
import { getPage, getSiteSettings } from '../lib/api'

export async function getStaticProps() {
  const site = await getSiteSettings()
  const page = await getPage('home')

  return {
    props: {
      site,
      page,
    },
  }
}

export default function Home({ site, page }) {
  return <Page site={site} page={page} />
}
