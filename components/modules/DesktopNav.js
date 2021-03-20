import tw, { styled } from 'twin.macro'
import ContentLink from '../elements/ContentLink'

const NavItem = styled.a(({ isActive }) => [
  tw`p-2.5 font-bold text-sm uppercase tracking-button hover:bg-primary-light hover:text-white`,
  isActive && tw`bg-primary text-white`,
])

export default function DesktopNav({ navItems }) {
  return (
    <nav tw='hidden lg:flex'>
      {navItems.map(({ fields, sys }) => {
        return (
          <ContentLink to={fields.link} key={sys.id}>
            {(isActive) => (
              <NavItem isActive={isActive}>{fields.title}</NavItem>
            )}
          </ContentLink>
        )
      })}
    </nav>
  )
}
