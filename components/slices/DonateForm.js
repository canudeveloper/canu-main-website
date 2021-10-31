import IframeResizer from 'iframe-resizer-react'
import tw from 'twin.macro'
import Markdown from '../../utils/markdown'
import Heading from '../elements/Heading'
import Label from '../elements/Label'

export default function DonateForm({ label, title, body, url }) {
  return (
    <section>
      <div tw='container'>
        <div tw='py-16 lg:py-32 text-center'>
          {label && <Label>{label}</Label>}
          <Heading>{title}</Heading>
          {body && (
            <div tw='prose m-auto mb-8'>
              <Markdown>{body}</Markdown>
            </div>
          )}
          <IframeResizer src={url} css={tw`w-full`} />
        </div>
      </div>
    </section>
  )
}
