import ReactMarkdown from 'react-markdown'
import { strapi } from '../lib/api'

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      transformImageUri={(uri) => (uri.startsWith('http') ? uri : strapi(uri))}
    >
      {children}
    </ReactMarkdown>
  )
}
