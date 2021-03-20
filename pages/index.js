import Page from '../components/Page'
import { getMainNavigation, getPage } from '../lib/api'

export async function getStaticProps() {
  const nav = await getMainNavigation()
  const page = await getPage('home')

  return {
    props: {
      nav,
      page,
    },
  }
}

export default function Home({ nav, page }) {
  return <Page nav={nav} {...page.fields} />
}
