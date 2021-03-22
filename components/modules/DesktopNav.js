import tw, { styled } from 'twin.macro'
import EntryLink from '../elements/EntryLink'

const NavItem = styled.a(({ isActive }) => [
  tw`p-2.5 rounded-t font-bold uppercase leading-none text-button tracking-button border-b-4 border-primary hover:border-black`,
  isActive && tw`bg-primary text-white`,
])

export default function DesktopNav({ navItems }) {
  return (
    <nav tw='hidden md:flex'>
      {navItems.map(({ fields, sys }) => {
        return (
          <EntryLink entry={fields.entry} key={sys.id}>
            {(isActive) => (
              <NavItem isActive={isActive}>{fields.title}</NavItem>
            )}
          </EntryLink>
        )
      })}
    </nav>
  )
}
