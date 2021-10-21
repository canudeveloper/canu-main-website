import { Envelope } from '@styled-icons/fa-solid'
import { motion, useCycle } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import Button from '../elements/Button'
import MenuToggle from '../elements/MenuToggle'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header({ header }) {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <header tw='flex bg-white shadow-underline h-26 z-10'>
      <div tw='container pt-4 flex justify-between'>
        <div tw='flex items-center'>
          <Link href='/'>
            <a>
              <Image
                src='/logo.svg'
                alt='CanU Canada Logo'
                width={102}
                height={60}
              />
            </a>
          </Link>
        </div>
        <div tw='hidden lg:flex flex-col justify-between items-end'>
          <div tw='flex items-center justify-end'>
            <ul tw='hidden lg:flex mr-5'>
              {header.email && (
                <li>
                  <a
                    tw='inline-block font-medium p-2'
                    href={`mailto:${header.email}`}
                  >
                    <Envelope size={16} css={tw`mb-0.5`} />
                    <span tw='ml-2'>{header.email}</span>
                  </a>
                </li>
              )}
            </ul>
            {header.button && (
              <Link href={header.button.href} passHref>
                <Button variant={header.button.style}>
                  {header.button.label}
                </Button>
              </Link>
            )}
          </div>
          <DesktopNav navItems={header.navigation} />
        </div>
        <div tw='lg:hidden relative'>
          <div tw='absolute top-4 right-14'>
            <motion.div animate={isOpen ? 'open' : 'closed'} tw='fixed z-10'>
              <MenuToggle toggle={() => toggleOpen()} />
            </motion.div>
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} navItems={header.navigation} />
    </header>
  )
}
