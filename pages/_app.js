/* eslint-disable react/jsx-props-no-spreading */

import GlobalStyles from '../components/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
