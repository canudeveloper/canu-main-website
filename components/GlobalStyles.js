import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

import React from 'react'
import { createGlobalStyle } from 'styled-components'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
