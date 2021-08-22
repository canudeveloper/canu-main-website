import Image from 'next/image'
import Link from 'next/link'
import 'twin.macro'
import linkTo from '../../utils/linkTo'

export default function Headline({ subtitle, title, body, image, cta }) {
  return (
    <section>
      <div tw='container'>
        <div tw='flex flex-wrap py-16 lg:py-32'>
          <div tw='w-full lg:w-3/5 pr-4'>
            {subtitle && (
              <div tw='font-medium text-secondary text-xl tracking-widest uppercase'>
                {subtitle}
              </div>
            )}
            <h2 tw='font-bold text-5xl mb-8 lg:mb-16'>{title}</h2>
            <p tw='max-w-prose whitespace-pre-wrap'>{body}</p>
            {cta && (
              <Link href={linkTo(cta.fields.entry)} passHref>
                <a tw='inline-block font-bold text-primary underline mt-8 lg:mt-16'>
                  {cta.fields.title}
                </a>
              </Link>
            )}
          </div>
          <div tw='relative w-2/5 hidden lg:block'>
            <Image
              src={`https:${image.fields.file.url}?w=960`}
              alt={image.fields.description}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
