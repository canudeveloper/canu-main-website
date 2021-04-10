import Page from '../components/pages/Page'
import { getAllEntries, getEntry, getSingletonEntry } from '../lib/api'

export async function getStaticPaths() {
  const pages = await getAllEntries('page')
  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.fields.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const site = await getSingletonEntry('siteSettings', 2)
  const page = await getEntry('page', params.slug)

  return {
    props: {
      site,
      page,
    },
  }
}

export default function Slug({ site, page }) {
  return <Page site={site} page={page} />
}
