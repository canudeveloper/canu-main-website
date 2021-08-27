import Image from 'next/image'
import Link from 'next/link'
import 'twin.macro'
import { strapi } from '../../lib/api'
import Markdown from '../../utils/markdown'
import Button from '../elements/Button'

export default function Headline({ copy, image }) {
  return (
    <section>
      <div tw='container'>
        <div tw='flex flex-wrap justify-between py-16 lg:py-32'>
          <div tw='mr-4'>
            {copy.label && (
              <div tw='font-medium text-secondary text-xl tracking-widest uppercase'>
                {copy.label}
              </div>
            )}
            <h2 tw='font-bold text-5xl mb-8 lg:mb-16'>{copy.title}</h2>
            <div tw='prose mb-8 lg:mb-16 last:mb-0'>
              <Markdown>{copy.body}</Markdown>
            </div>
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
          </div>
          <div tw='flex-1 max-w-1/2 relative hidden lg:block'>
            <Image
              src={strapi(image.formats.large.url)}
              alt={image.alternativeText}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
