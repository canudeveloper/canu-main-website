import Image from 'next/image'
import 'twin.macro'
import { strapi } from '../../lib/api'
import Heading from '../elements/Heading'
import Label from '../elements/Label'

export default function ImageGrid({ label, title, images }) {
  return (
    <section>
      <div tw='container'>
        <div tw='py-16 lg:py-32'>
          {label && <Label tw='text-center'>{label}</Label>}
          <Heading tw='text-center'>{title}</Heading>
          <div tw='flex flex-wrap -m-4'>
            {images.map((image) => {
              const { thumbnail } = image.formats
              return (
                <div key={image.id} tw='m-auto p-4'>
                  <Image
                    src={strapi(thumbnail.url)}
                    alt={image.alternativeText}
                    width={thumbnail.width}
                    height={thumbnail.height}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
