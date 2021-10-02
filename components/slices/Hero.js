import Image from 'next/image'
import tw from 'twin.macro'
import { strapi } from '../../lib/api'

export default function Hero({ image, label, title }) {
  return (
    <section>
      {image && (
        <div tw='relative h-60 md:h-80 lg:h-96 xl:h-120 2xl:h-160 3xl:h-200'>
          <div tw='absolute w-full h-full bg-hero-gradient' />
          <Image
            src={strapi(image.formats.large.url)}
            alt={image.alternativeText}
            layout='fill'
            tw='object-cover object-center pointer-events-none -z-10'
            priority
          />
          <img
            src='/hero-swoosh.svg'
            alt='Hero Swoosh'
            tw='absolute bottom-0 w-full -mb-1 pointer-events-none'
          />
        </div>
      )}
      <div css={[tw`container relative text-center mb-8`, !image && tw`mt-16`]}>
        {label && (
          <span tw='block text-primary text-xl lg:text-2xl uppercase tracking-widest mb-1'>
            {label}
          </span>
        )}
        <h1 tw='block font-bold text-4xl lg:text-6xl'>{title}</h1>
      </div>
    </section>
  )
}
