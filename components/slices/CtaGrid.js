import Image from 'next/image'
import Link from 'next/link'
import 'twin.macro'
import { strapi } from '../../lib/api'
import Button from '../elements/Button'
import Heading from '../elements/Heading'

export default function CtaGrid({ title, ctas }) {
  return (
    <section>
      <div tw='container'>
        <div tw='py-16 lg:py-32'>
          <Heading tw='border-b-2 border-primary text-center pb-4'>
            {title}
          </Heading>
          <div tw='flex flex-wrap gap-8 justify-center'>
            {ctas.map((cta) => {
              const { small } = cta.image.formats
              return (
                <div
                  key={cta.id}
                  tw='relative w-96 rounded overflow-hidden'
                  className='group'
                >
                  <Image
                    src={strapi(small.url)}
                    alt={cta.image.alternativeText}
                    width={small.width}
                    height={small.height}
                    layout='responsive'
                    tw='filter grayscale group-hover:grayscale-0'
                  />
                  <div tw='absolute inset-x-0 bottom-0 bg-black text-white text-center bg-opacity-70 py-4 px-8'>
                    <h3 tw='mb-2'>{cta.title}</h3>
                    <Link href={cta.link.href} passHref>
                      <Button variant='secondary' tw='w-full'>
                        {cta.link.label}
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
