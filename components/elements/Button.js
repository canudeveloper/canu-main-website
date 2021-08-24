import tw from 'twin.macro'

const Primary = tw.button`px-2.5 py-1.5 rounded font-bold uppercase text-sm-none tracking-button bg-primary text-white hocus:bg-primary-light`
const Secondary = tw.button`px-2.5 py-1.5 rounded font-bold uppercase text-sm-none tracking-button bg-secondary text-white hocus:bg-secondary-light`
const Link = tw.a`inline-block font-bold text-primary hocus:text-primary-light underline`

const buttons = {
  Primary,
  Secondary,
  Link,
}

export default function Button({ variant = 'link', children, ...props }) {
  const Component = buttons[variant.charAt(0).toUpperCase() + variant.slice(1)]

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props}>{children}</Component>
}
