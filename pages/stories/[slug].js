import Page from '../../components/Page'
import get from '../../lib/api'

export async function getStaticPaths() {
  const stories = await get('/stories')
  const paths = stories.map((page) => {
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
  const page = (await get(`/stories/?slug=${params.slug}`))[0]

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
