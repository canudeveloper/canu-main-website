import { Bars, ChevronDown } from '@styled-icons/fa-solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'
import linkTo from '../../utils/linkTo'

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
  if (navItem.dropdown) {
    const hasActiveItem = navItem.dropdown.some(
      (x) => linkTo(x.fields.entry) === currentPath
    )

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
          {navItem.dropdown.map(({ fields, sys }) => {
            const href = linkTo(fields.entry)

            return (
              <li key={sys.id}>
                <Link href={href} passHref>
                  <DropdownItem isActive={currentPath === href}>
                    {fields.title}
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
      <Bars size={44} css={tw`lg:hidden p-3`} />
      <ul tw='hidden lg:flex'>
        {navItems.map(({ fields, sys }) => {
          const href = linkTo(fields.entry)

          return (
            <li key={sys.id}>
              <DropdownWrapper navItem={fields} currentPath={currentPath}>
                {(hasActiveItem) => (
                  <Link href={href} passHref>
                    <NavItem isActive={hasActiveItem || currentPath === href}>
                      <div tw='flex items-center'>
                        {fields.title}
                        {fields.dropdown && (
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
