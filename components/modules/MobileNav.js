import { ChevronDown } from '@styled-icons/fa-solid'
import { AnimatePresence, motion, useCycle } from 'framer-motion'
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
    transition: {
      staggerChildren: 0.05,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const NavItem = ({ navItem }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const listItem = {
    open: {
      x: 0,
      opacity: 1,
      transition: { stiffness: 1000, velocity: -100 },
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: { stiffness: 1000 },
    },
  }

  const dropdownContent = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: { stiffness: 1000, velocity: -100 },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { stiffness: 1000 },
    },
  }

  return (
    <motion.li variants={listItem} tw='font-bold text-3xl mb-8'>
      <div tw='flex justify-between'>
        <Link href={navItem.href} passHref>
          <a tw='overflow-hidden overflow-ellipsis'>{navItem.label}</a>
        </Link>
        {navItem.dropdown?.length !== 0 && (
          <motion.button
            type='button'
            tw='px-3 py-1 leading-0 focus:outline-none'
            onClick={() => toggleOpen()}
            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ stiffness: 1000 }}
          >
            <ChevronDown size={24} />
          </motion.button>
        )}
      </div>
      <AnimatePresence>
        {navItem.dropdown?.length !== 0 && isOpen && (
          <motion.div
            variants={dropdownContent}
            animate='open'
            initial='closed'
            exit='closed'
          >
            <ul tw='pt-6 pl-8 text-3xl'>
              {navItem.dropdown.map((link) => {
                return (
                  <li key={link.id} tw='mb-4'>
                    <Link href={link.href} passHref>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function MobileNav({ isOpen, navItems }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          tw='fixed bg-white h-screen w-full overflow-auto'
          variants={container}
          animate='open'
          initial='closed'
          exit='closed'
        >
          <nav tw='container pt-28'>
            <motion.ul variants={list}>
              {navItems.map((navItem) => {
                return <NavItem key={navItem.id} navItem={navItem} />
              })}
            </motion.ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
