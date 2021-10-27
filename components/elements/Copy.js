import Link from 'next/link'
import tw from 'twin.macro'
import Markdown from '../../utils/markdown'
import Button from './Button'

export default function Copy({ copy }) {
  return (
    <>
      {copy.label && (
        <h3 tw='font-medium text-secondary text-xl tracking-widest uppercase'>
          {copy.label}
        </h3>
      )}
      <h2 tw='font-bold text-5xl mb-8 lg:mb-12'>{copy.title}</h2>
      <div tw='prose' css={copy.buttons.length !== 0 && tw`mb-8 lg:mb-16`}>
        <Markdown>{copy.body}</Markdown>
      </div>
      {copy.buttons.length !== 0 && (
        <div tw='-m-2'>
          {copy.buttons.map((button) => {
            return (
              <Link key={button.id} href={button.href} passHref>
                <Button variant={button.style} tw='m-2'>
                  {button.label}
                </Button>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
