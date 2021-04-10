export default function linkTo(entry) {
  const contentType = entry.sys.contentType.sys.id
  const { slug } = entry.fields

  switch (contentType) {
    case 'page':
      return `/${slug}`
    case 'pageStory':
      return `/stories/${slug}`
    default:
      return '/'
  }
}
