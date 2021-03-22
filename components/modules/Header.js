import { Bars } from '@styled-icons/fa-solid'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import Button from '../elements/Button'
import DesktopNav from './DesktopNav'

const Hamburger = tw(Bars)`md:hidden p-3`

export default function Header({ site }) {
  return (
    <header tw='flex bg-white md:shadow-underline h-24'>
      <div tw='container pt-4 flex justify-between'>
        <div tw='flex items-center'>
          <Link href='/'>
            <a>
              <Image
                src='/logo.svg'
                alt='CanU Canada Logo'
                width='102'
                height='60'
              />
            </a>
          </Link>
        </div>
        <div tw='flex flex-col justify-between items-end'>
          <div tw='flex justify-end'>
            <Button>Donate</Button>
          </div>
          <div>
            <Hamburger size={44} />
            <DesktopNav navItems={site.mainNavigation} />
          </div>
        </div>
      </div>
    </header>
  )
}
