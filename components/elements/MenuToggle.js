import { motion } from 'framer-motion'
import 'twin.macro'

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

export default function MenuToggle({ toggle }) {
  return (
    <button
      type='button'
      onClick={toggle}
      tw='p-4 bg-white rounded-full shadow focus:outline-none focus-visible:ring'
    >
      <motion.svg width='20' height='20' viewBox='0 0 20 20'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </motion.svg>
    </button>
  )
}
