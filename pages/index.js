import { getMainNavigation, getPage } from '../lib/api'

import Page from '../components/Page'

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
  return (
    <Page
      nav={nav}
      title={page.fields.title}
      slug={page.fields.slug}
      description={page.fields.description}
      robots={page.fields.robots}
    />
  )
}
