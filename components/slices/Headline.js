import Image from 'next/image'
import Link from 'next/link'
import 'twin.macro'
import { strapi } from '../../lib/api'
import Button from '../elements/Button'

export default function Headline({ copy, image }) {
  return (
    <section>
      <div tw='container'>
        <div tw='flex flex-wrap py-16 lg:py-32'>
          <div tw='w-full lg:w-3/5 pr-4'>
            {copy.label && (
              <div tw='font-medium text-secondary text-xl tracking-widest uppercase'>
                {copy.label}
              </div>
            )}
            <h2 tw='font-bold text-5xl mb-8 lg:mb-16'>{copy.title}</h2>
            <p tw='max-w-prose whitespace-pre-wrap mb-8 lg:mb-16 last:mb-0'>
              {copy.body}
            </p>
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
          <div tw='relative w-2/5 hidden lg:block'>
            <Image
              src={strapi(image.formats.medium.url)}
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
