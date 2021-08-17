import { Envelope } from '@styled-icons/fa-solid'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import linkTo from '../../utils/linkTo'
import Button from '../elements/Button'
import DesktopNav from './DesktopNav'

export default function Header({ site }) {
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
        <div tw='flex flex-col justify-between items-end'>
          <div tw='flex items-center justify-end'>
            <ul tw='hidden lg:flex mr-5'>
              {site.email && (
                <li>
                  <a
                    tw='inline-block font-medium p-2'
                    href={`mailto:${site.email}`}
                  >
                    <Envelope size={16} css={tw`mb-0.5`} />
                    <span tw='ml-2'>{site.email}</span>
                  </a>
                </li>
              )}
            </ul>
            {site.headerCTA && (
              <Link href={linkTo(site.headerCTA.fields.entry)} passHref>
                <Button as='a'>{site.headerCTA.fields.title}</Button>
              </Link>
            )}
          </div>
          <DesktopNav navItems={site.mainNavigation} />
        </div>
      </div>
    </header>
  )
}
