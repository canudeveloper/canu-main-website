import Page from '../components/pages/Page'
import get from '../lib/api'

export async function getStaticPaths() {
  const pages = await get('/pages')
  const paths = pages.map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const header = await get('/header')
  const footer = await get('/footer')
  const page = (await get(`/pages/?slug=${params.slug}`))[0]

  return {
    props: {
      header,
      footer,
      page,
    },
  }
}

export default function Slug({ header, footer, page }) {
  return <Page header={header} footer={footer} page={page} />
}
