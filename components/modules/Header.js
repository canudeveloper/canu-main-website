import { Facebook, Instagram, Youtube } from '@styled-icons/fa-brands'
import { Bars, Envelope } from '@styled-icons/fa-solid'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import linkTo from '../../utils/linkTo'
import Button from '../elements/Button'
import DesktopNav from './DesktopNav'

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
          <div tw='flex items-center justify-end'>
            <div tw='hidden md:flex mr-5'>
              {site.facebook && (
                <a href={site.facebook} target='_blank' rel='noreferrer'>
                  <Facebook size={32} css={tw`p-2 mx-2`} />
                </a>
              )}
              {site.instagram && (
                <a href={site.instagram} target='_blank' rel='noreferrer'>
                  <Instagram size={32} css={tw`p-2 mx-2`} />
                </a>
              )}
              {site.youtube && (
                <a href={site.youtube} target='_blank' rel='noreferrer'>
                  <Youtube size={32} css={tw`p-2 mx-2`} />
                </a>
              )}
              {site.email && (
                <a href={`mailto:${site.email}`} tw='font-medium'>
                  <Envelope size={32} css={tw`p-2 mx-2`} />
                  {site.email}
                </a>
              )}
            </div>
            {site.headerCTA && (
              <Link href={linkTo(site.headerCTA.fields.entry)} passHref>
                <Button>{site.headerCTA.fields.title}</Button>
              </Link>
            )}
          </div>
          <div>
            <Bars size={44} css={tw`md:hidden p-3`} />
            <DesktopNav navItems={site.mainNavigation} />
          </div>
        </div>
      </div>
    </header>
  )
}
