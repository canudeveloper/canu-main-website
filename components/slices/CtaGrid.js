import 'twin.macro'
import Heading from '../elements/Heading'
import ThumbnailLink from '../elements/ThumbnailLink'

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
              return (
                <ThumbnailLink
                  key={cta.id}
                  image={cta.image}
                  title={cta.title}
                  label={cta.link.label}
                  href={cta.link.href}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
