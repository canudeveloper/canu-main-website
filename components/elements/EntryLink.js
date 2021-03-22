import Link from 'next/link'
import { useRouter } from 'next/router'

function url(contentType, slug) {
  switch (contentType) {
    case 'page':
      return slug === 'home' ? '/' : `/${slug}`
    case 'story':
      return `/stories/${slug}`
    default:
      return '/'
  }
}

export default function EntryLink({ entry, children }) {
  const router = useRouter()
  const href = url(entry.sys.contentType.sys.id, entry.fields.slug)

  return (
    <Link href={href} passHref>
      {children(router.asPath === href)}
    </Link>
  )
}
