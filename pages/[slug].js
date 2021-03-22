import Page from '../components/Page'
import { getAllPages, getPage, getSiteSettings } from '../lib/api'

export async function getStaticPaths() {
  const pages = await getAllPages()
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
  const site = await getSiteSettings()
  const page = await getPage(params.slug)

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
