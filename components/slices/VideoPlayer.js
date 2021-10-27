import ReactPlayer from 'react-player'
import tw from 'twin.macro'
import Copy from '../elements/Copy'

export default function VideoPlayer({ url, videoOnLeft, copy }) {
  return (
    <section>
      <div tw='container'>
        <div
          tw='grid grid-cols-1 gap-8 py-16 lg:py-32'
          css={copy ? tw`lg:grid-cols-5 xl:grid-cols-2` : tw``}
        >
          {copy && (
            <div tw='lg:col-span-3 xl:col-span-1'>
              <Copy copy={copy} />
            </div>
          )}
          <div
            tw='lg:col-span-2 xl:col-span-1'
            css={videoOnLeft && tw`lg:order-first`}
          >
            <div tw='aspect-w-16 aspect-h-9'>
              <ReactPlayer url={url} width='100%' height='100%' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
