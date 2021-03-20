import Link from 'next/link'
import { useRouter } from 'next/router'

function url(contentType, slug) {
  switch (contentType) {
    case 'page':
      return slug == 'home' ? '/' : `/${slug}`
    case 'story':
      return `/stories/${slug}`
  }
}

export default function ContentLink({ to, children }) {
  const router = useRouter()
  const href = url(to.sys.contentType.sys.id, to.fields.slug)

  return (
    <Link href={href} passHref>
      {children(router.asPath === href)}
    </Link>
  )
}
