import 'twin.macro'

import Image from 'next/image'
import Link from 'next/link'
import DesktopNav from './DesktopNav'

export default function Header({ nav }) {
  return (
    <header tw='bg-white border-white lg:border-primary border-b-4'>
      <div tw='container pt-4 flex justify-between'>
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
        <div tw='flex flex-col justify-between'>
          <div />
          <DesktopNav navItems={nav.fields.navItems} />
        </div>
      </div>
    </header>
  )
}
