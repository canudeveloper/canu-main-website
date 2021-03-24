import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { styled } from 'twin.macro'
import linkTo from '../../utils/linkTo'

const NavItem = styled.a(({ isActive }) => [
  tw`p-2.5 rounded-t font-bold uppercase leading-none text-button tracking-button border-b-4 border-primary hover:border-black`,
  isActive && tw`bg-primary text-white`,
])

export default function DesktopNav({ navItems }) {
  const router = useRouter()

  return (
    <nav tw='hidden md:flex'>
      {navItems.map(({ fields, sys }) => {
        const href = linkTo(fields.entry)

        return (
          <Link href={href} key={sys.id} passHref>
            <NavItem isActive={router.asPath === href}>{fields.title}</NavItem>
          </Link>
        )
      })}
    </nav>
  )
}
