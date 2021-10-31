import Link from 'next/link'
import tw from 'twin.macro'
import Markdown from '../../utils/markdown'
import Button from './Button'
import Heading from './Heading'
import Label from './Label'

export default function Copy({ copy }) {
  return (
    <>
      {copy.label && <Label>{copy.label}</Label>}
      <Heading>{copy.title}</Heading>
      <div tw='prose' css={copy.buttons.length !== 0 && tw`mb-8 lg:mb-16`}>
        <Markdown>{copy.body}</Markdown>
      </div>
      {copy.buttons.length !== 0 && (
        <div tw='flex flex-wrap gap-4'>
          {copy.buttons.map((button) => {
            return (
              <Link key={button.id} href={button.href} passHref>
                <Button variant={button.style}>{button.label}</Button>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
