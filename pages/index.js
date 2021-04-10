import HomePage from '../components/pages/HomePage'
import { getSingletonEntry } from '../lib/api'

export async function getStaticProps() {
  const site = await getSingletonEntry('siteSettings', 2)
  const page = await getSingletonEntry('pageHome')

  return {
    props: {
      site,
      page,
    },
  }
}

export default function Home({ site, page }) {
  return <HomePage site={site} page={page} />
}
