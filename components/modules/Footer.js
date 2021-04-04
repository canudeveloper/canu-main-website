import { Facebook, Instagram, Youtube } from '@styled-icons/fa-brands'
import { Building, Envelope, Fax, Phone } from '@styled-icons/fa-solid'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import linkTo from '../../utils/linkTo'
import SubscribeForm from '../elements/SubscribeForm'

const Column = tw.div`w-full md:w-1/3 p-4`
const Heading = tw.h2`font-bold text-white mb-4`
const List = tw.ul`text-sm text-gray-light`
const ListItem = tw.li`mt-2`

function Social({ href, icon }) {
  return (
    href && (
      <li>
        <a tw='inline-block ml-5' href={href} target='_blank' rel='noreferrer'>
          {React.createElement(icon, { size: 24 })}
        </a>
      </li>
    )
  )
}

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
            <SubscribeForm />
            <ul tw='flex justify-end text-white'>
              <Social href={site.facebook} icon={Facebook} />
              <Social href={site.instagram} icon={Instagram} />
              <Social href={site.youtube} icon={Youtube} />
            </ul>
          </Column>
        </div>
      </div>
    </footer>
  )
}
