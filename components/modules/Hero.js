import Image from 'next/image'
import tw from 'twin.macro'

export default function Hero({ image, children }) {
  return (
    <section>
      {image && (
        <div tw='relative h-60 md:h-80 lg:h-96 xl:h-120 2xl:h-160 3xl:h-200'>
          <div tw='absolute w-full h-full bg-hero-gradient' />
          <Image
            src={`https:${image.fields.file.url}?&w=1536`}
            alt={image.fields.description}
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
      <div
        css={[
          tw`container relative text-center z-10 mb-8`,
          !image && tw`mt-16`,
        ]}
      >
        {children}
      </div>
    </section>
  )
}
