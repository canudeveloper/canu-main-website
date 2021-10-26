import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import { strapi } from '../../lib/api'
import Markdown from '../../utils/markdown'
import Button from '../elements/Button'
import Heading from '../elements/Heading'
import Label from '../elements/Label'

export default function Headline({ copy, image, imageOnLeft }) {
  return (
    <section>
      <div tw='container'>
        <div
          tw='grid grid-cols-1 gap-8 py-16 lg:py-32'
          css={
            image
              ? tw`lg:grid-cols-5 xl:grid-cols-2`
              : tw`justify-items-center text-center`
          }
        >
          <div tw='col-span-3 xl:col-span-1'>
            {copy.label && <Label>{copy.label}</Label>}
            <Heading>{copy.title}</Heading>
            <div
              tw='prose'
              css={copy.buttons.length !== 0 && tw`mb-8 lg:mb-16`}
            >
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
          </div>
          {image && (
            <div
              tw='hidden lg:block relative col-span-2 xl:col-span-1'
              css={imageOnLeft && tw`order-first`}
            >
              <div>
                <Image
                  src={strapi(image.url)}
                  alt={image.alternativeText}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
