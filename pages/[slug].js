import Page from '../components/Page'
import { getMainNavigation, getPage, getAllPages } from '../lib/api'

export async function getStaticProps({ params }) {
  const nav = await getMainNavigation()
  const page = await getPage(params.slug)

  return {
    props: {
      nav,
      page,
    },
  }
}

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

export default function Slug({ nav, page }) {
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
