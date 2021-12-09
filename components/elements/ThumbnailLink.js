import Image from 'next/image'
import Link from 'next/link'
import 'twin.macro'
import { strapi } from '../../lib/api'
import Button from './Button'

export default function ThumbnailLink({ image, title, label, href }) {
  const { small } = image.formats
  return (
    <div tw='relative w-64 md:w-80 rounded overflow-hidden' className='group'>
      <Image
        src={strapi(small.url)}
        alt={image.alternativeText}
        width={small.width}
        height={small.height}
        layout='responsive'
        tw='filter grayscale group-hover:grayscale-0'
      />
      <div tw='absolute inset-x-0 bottom-0 bg-black text-white text-center bg-opacity-70 py-4 px-8'>
        <h3 tw='mb-2'>{title}</h3>
        <Link href={href} passHref>
          <Button variant='secondary' tw='w-full'>
            {label}
          </Button>
        </Link>
      </div>
    </div>
  )
}
