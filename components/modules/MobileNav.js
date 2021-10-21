import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import 'twin.macro'

const container = {
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const list = {
  open: {
    visibility: 'visible',
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
  closed: {
    visibility: 'hidden',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
}

const listItem = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MobileNav({ isOpen, navItems }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'scroll'
  }, [isOpen])

  return (
    <motion.div
      tw='fixed bg-white h-screen w-full overflow-auto'
      variants={container}
      animate={isOpen ? 'open' : 'closed'}
      initial='closed'
    >
      <nav tw='container pt-28'>
        <motion.ul variants={list}>
          {navItems.map((navItem) => {
            return (
              <motion.li
                key={navItem.id}
                variants={listItem}
                tw='font-bold text-4xl mb-8'
              >
                <Link href={navItem.href} passHref>
                  <a>{navItem.label}</a>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </nav>
    </motion.div>
  )
}
