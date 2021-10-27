import Image from 'next/image'
import tw from 'twin.macro'
import { strapi } from '../../lib/api'
import Copy from '../elements/Copy'

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
            <Copy copy={copy} />
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
