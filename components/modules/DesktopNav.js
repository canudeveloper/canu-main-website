import { ChevronDown } from '@styled-icons/fa-solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'

const NavItem = styled.a(({ isActive }) => [
  tw`inline-block p-2.5 rounded-t font-bold uppercase text-sm-none tracking-button border-b-4 border-primary hocus:border-black`,
  isActive && tw`bg-primary text-white`,
])

const DropdownItem = styled.a(({ isActive }) => [
  tw`inline-block p-2.5 w-full break-words font-bold uppercase text-sm-none tracking-button border-b border-primary bg-white hocus:(bg-primary-light text-black)`,
  `-webkit-hyphens: auto; -ms-hyphens: auto; hyphens: auto;`,
  isActive && tw`bg-primary text-white`,
])

const DropdownWrapper = ({ navItem, currentPath, children }) => {
  if (navItem.dropdown?.length) {
    const hasActiveItem = navItem.dropdown.some((x) => x.href === currentPath)

    return (
      <div
        tw='relative'
        css={{
          '&:hover ul, &:focus-within ul': {
            visibility: 'visible',
            opacity: 1,
          },
        }}
      >
        {children(hasActiveItem)}
        <ul tw='invisible opacity-5 absolute w-full border-l border-r border-black transition-all'>
          {navItem.dropdown.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.href} passHref>
                  <DropdownItem isActive={currentPath === link.href}>
                    {link.label}
                  </DropdownItem>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return children(false)
}

export default function DesktopNav({ navItems }) {
  const currentPath = useRouter().asPath

  return (
    <nav>
      <ul tw='flex'>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <DropdownWrapper navItem={navItem} currentPath={currentPath}>
                {(hasActiveItem) => (
                  <Link href={navItem.href} passHref>
                    <NavItem
                      isActive={hasActiveItem || currentPath === navItem.href}
                    >
                      <div tw='flex items-center'>
                        {navItem.label}
                        {navItem.dropdown.length !== 0 && (
                          <ChevronDown size={10} tw='ml-1.5' />
                        )}
                      </div>
                    </NavItem>
                  </Link>
                )}
              </DropdownWrapper>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
