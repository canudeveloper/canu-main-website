import { Facebook, Instagram, Youtube } from '@styled-icons/fa-brands'
import { Building, Envelope, Fax, Phone } from '@styled-icons/fa-solid'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import SubscribeForm from '../elements/SubscribeForm'

const Heading = tw.h2`font-bold text-white mb-4`
const List = tw.ul`text-sm text-gray-light`
const ListItem = tw.li`mt-2`
const Social = ({ href, icon }) => {
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

export default function Footer({ footer }) {
  return (
    <footer tw='bg-gray-dark'>
      <div tw='container py-8'>
        <div tw='grid md:grid-cols-3 gap-8'>
          <div>
            <Heading>Contact</Heading>
            <List>
              {footer.phone && (
                <ListItem>
                  <a href={`tel:${footer.phone}`}>
                    <Phone size={14} css={tw`mr-2.5`} />
                    <span>{footer.phone}</span>
                  </a>
                </ListItem>
              )}
              {footer.fax && (
                <ListItem>
                  <a href={`fax:${footer.fax}`}>
                    <Fax size={14} css={tw`mr-2.5`} />
                    <span>{footer.fax}</span>
                  </a>
                </ListItem>
              )}
              {footer.email && (
                <ListItem>
                  <a href={`mailto:${footer.email}`}>
                    <Envelope size={14} css={tw`mr-2.5`} />
                    <span>{footer.email}</span>
                  </a>
                </ListItem>
              )}
              {footer.address && (
                <ListItem>
                  <div tw='flex'>
                    <Building size={14} css={tw`mr-2.5 mt-1 flex-shrink-0`} />
                    <span tw='whitespace-pre-wrap'>{footer.address}</span>
                  </div>
                </ListItem>
              )}
            </List>
          </div>
          <div>
            <Heading>Explore</Heading>
            <List>
              {footer.navigation.map((link) => {
                return (
                  <ListItem key={link.id}>
                    <Link href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </ListItem>
                )
              })}
            </List>
          </div>
          <div>
            <Heading>Get Involved</Heading>
            <SubscribeForm />
            <div tw='text-xs text-gray mb-4'>
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href='https://policies.google.com/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href='https://policies.google.com/terms'
                target='_blank'
                rel='noreferrer'
              >
                Terms of Service
              </a>{' '}
              apply.
            </div>
            <ul tw='flex justify-end text-white'>
              <Social href={footer.facebook} icon={Facebook} />
              <Social href={footer.instagram} icon={Instagram} />
              <Social href={footer.youtube} icon={Youtube} />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
