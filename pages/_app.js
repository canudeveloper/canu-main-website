/* eslint-disable react/jsx-props-no-spreading */

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import GlobalStyles from '../components/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp
