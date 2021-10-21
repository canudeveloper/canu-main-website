import React from 'react'
import tw from 'twin.macro'

const Primary = tw.button`px-2.5 py-1.5 rounded font-bold uppercase text-sm-none tracking-button bg-primary text-white hocus:bg-primary-light`
const Secondary = tw.button`px-2.5 py-1.5 rounded font-bold uppercase text-sm-none tracking-button bg-secondary text-white hocus:bg-secondary-light`
const Link = tw.a`inline-block font-bold text-primary hocus:text-primary-light underline`

const styles = {
  Primary,
  Secondary,
  Link,
}

const Button = React.forwardRef(
  ({ variant = 'link', children, ...props }, ref) => {
    const Component = styles[variant.charAt(0).toUpperCase() + variant.slice(1)]

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export default Button
