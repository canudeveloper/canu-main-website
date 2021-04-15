import { AnimatePresence, motion, useCycle } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import 'twin.macro'

export default function HeroSlider({ slides }) {
  const [slide, cycleSlide] = useCycle(...slides)
  const imageUrl = slide.fields.image.fields.file.url

  useEffect(() => {
    const timeOut = setTimeout(cycleSlide, 5000)
    return () => clearTimeout(timeOut)
  }, [slide, cycleSlide])

  return (
    <section tw='flex flex-col h-main-screen'>
      <div tw='relative flex-1'>
        <AnimatePresence>
          <motion.div
            key={imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
          >
            <div tw='absolute w-full h-full bg-hero-gradient' />
            <Image
              src={`https:${imageUrl}?&w=1536`}
              alt={slide.fields.image.fields.description}
              layout='fill'
              tw='object-cover object-center pointer-events-none -z-10'
              priority
            />
          </motion.div>
        </AnimatePresence>
        <img
          src='/hero-swoosh.svg'
          alt='Hero Swoosh'
          tw='absolute bottom-0 w-full -mb-4 pointer-events-none'
        />
      </div>
      <div tw='container relative h-44 z-10'>
        <AnimatePresence>
          <motion.h1
            key={slide.fields.heading}
            initial={{ x: '10%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-10%', opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
            tw='absolute top-0 right-0 px-8 text-right'
          >
            <span tw='block text-primary text-xl lg:text-2xl uppercase tracking-widest mb-1'>
              {slide.fields.subheading}
            </span>
            <span tw='block font-bold text-4xl lg:text-6xl'>{` ${slide.fields.heading}`}</span>
          </motion.h1>
        </AnimatePresence>
        <div tw='flex absolute bottom-0 right-0 px-8 mb-4'>
          {slides.map((x) => {
            const index = slides.indexOf(x)
            return (
              <div key={index} tw='flex items-center'>
                <button
                  key={index}
                  type='button'
                  onClick={() => cycleSlide(index)}
                  tw='px-4 py-3 text-primary focus:outline-none focus-visible:ring'
                >
                  {index + 1}
                </button>
                <AnimatePresence>
                  {slide === x && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 75 }}
                      exit={{ width: 0 }}
                      transition={{ ease: 'easeInOut' }}
                      tw='inline-block h-px bg-primary'
                    />
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
