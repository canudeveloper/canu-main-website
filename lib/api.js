import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getPage(slug) {
  const entries = await client.getEntries({
    content_type: 'page',
    limit: 1,
    'fields.slug[in]': slug,
  })

  return entries.items[0]
}

export async function getAllPages() {
  const entries = await client.getEntries({
    content_type: 'page',
  })

  return entries.items
}

export async function getMainNavigation() {
  const entries = await client.getEntries({
    content_type: 'mainNavigation',
    limit: 1,
    include: 2,
  })

  return entries.items[0]
}
