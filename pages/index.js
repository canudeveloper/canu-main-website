import HomePage from '../components/pages/HomePage'
import get from '../lib/api'

export async function getStaticProps() {
  const header = await get('/header')
  const footer = await get('/footer')
  const page = await get('/home-page')

  return {
    props: {
      header,
      footer,
      page,
    },
  }
}

export default function Home({ header, footer, page }) {
  return <HomePage header={header} footer={footer} page={page} />
}
