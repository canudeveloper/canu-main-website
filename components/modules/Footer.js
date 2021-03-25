import { Facebook, Instagram, Youtube } from '@styled-icons/fa-brands'
import { Building, Envelope, Fax, Phone } from '@styled-icons/fa-solid'
import Link from 'next/link'
import tw from 'twin.macro'
import linkTo from '../../utils/linkTo'

const Column = tw.div`w-full md:w-1/3 p-4`
const Heading = tw.h2`font-bold text-white mb-3`
const List = tw.ul`text-sm text-gray-light`
const ListItem = tw.li`mt-2`

export default function Footer({ site }) {
  return (
    <footer tw='bg-gray-dark'>
      <div tw='container py-8'>
        <div tw='flex flex-wrap -m-4'>
          <Column>
            <Heading>Contact</Heading>
            <List>
              {site.phone && (
                <ListItem>
                  <a href={`tel:${site.phone}`}>
                    <Phone size={14} css={tw`mr-2.5`} />
                    <span>{site.phone}</span>
                  </a>
                </ListItem>
              )}
              {site.fax && (
                <ListItem>
                  <a href={`fax:${site.fax}`}>
                    <Fax size={14} css={tw`mr-2.5`} />
                    <span>{site.fax}</span>
                  </a>
                </ListItem>
              )}
              {site.email && (
                <ListItem>
                  <a href={`mailto:${site.email}`}>
                    <Envelope size={14} css={tw`mr-2.5`} />
                    <span>{site.email}</span>
                  </a>
                </ListItem>
              )}
              {site.address && (
                <ListItem>
                  <a href={`${site.address}`} tw='flex'>
                    <Building size={14} css={tw`mr-2.5 mt-1 flex-shrink-0`} />
                    <span tw='whitespace-pre-wrap'>{site.address}</span>
                  </a>
                </ListItem>
              )}
            </List>
          </Column>
          <Column>
            <Heading>Explore</Heading>
            <List>
              {site.footerNavigation.map(({ fields, sys }) => {
                const href = linkTo(fields.entry)

                return (
                  <ListItem key={sys.id}>
                    <Link href={href}>
                      <a>{fields.title}</a>
                    </Link>
                  </ListItem>
                )
              })}
            </List>
          </Column>
          <Column>
            <Heading>Get Involved</Heading>
            <ul tw='flex text-white'>
              {site.facebook && (
                <li>
                  <a
                    tw='inline-block mr-5'
                    href={site.facebook}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Facebook size={24} />
                  </a>
                </li>
              )}
              {site.instagram && (
                <li>
                  <a
                    tw='inline-block mr-5'
                    href={site.instagram}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Instagram size={24} />
                  </a>
                </li>
              )}
              {site.youtube && (
                <li>
                  <a
                    tw='inline-block mr-5'
                    href={site.youtube}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Youtube size={24} />
                  </a>
                </li>
              )}
            </ul>
          </Column>
        </div>
      </div>
    </footer>
  )
}
