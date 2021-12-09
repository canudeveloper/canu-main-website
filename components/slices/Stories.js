import 'twin.macro'
import Heading from '../elements/Heading'
import ThumbnailLink from '../elements/ThumbnailLink'

export default function Stories({ title, stories }) {
  return (
    <section>
      <div tw='container'>
        <div tw='py-16 lg:py-32'>
          <Heading tw='border-b-2 border-primary text-center pb-4'>
            {title}
          </Heading>
          <div tw='flex flex-wrap gap-8 justify-center'>
            {stories.map((story) => {
              return (
                <ThumbnailLink
                  key={story.id}
                  image={story.image}
                  title={story.title}
                  label='Read'
                  href={`/stories/${story.slug}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
