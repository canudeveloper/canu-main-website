import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getAllEntries(type) {
  const entries = await client.getEntries({
    content_type: type,
  })

  return entries.items
}

export async function getEntry(type, slug) {
  const entries = await client.getEntries({
    content_type: type,
    limit: 1,
    'fields.slug[in]': slug,
  })

  return entries.items[0].fields
}

export async function getSingletonEntry(type, include = 1) {
  const entries = await client.getEntries({
    content_type: type,
    limit: 1,
    include,
  })

  return entries.items[0].fields
}
