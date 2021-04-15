module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,1) 100%)',
      },
      boxShadow: {
        underline: 'inset 0px -4px 0px 0px #bb2025',
      },
      fontSize: {
        'sm-none': ['0.875rem', '1rem'],
      },
      height: {
        26: '6.5rem',
        120: '30rem',
        160: '40rem',
        200: '50rem',
        'main-screen': 'calc(100vh - 104px)',
      },
      letterSpacing: {
        button: '0.25em',
      },
      screens: {
        '3xl': '1920px',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#dd8f92',
        DEFAULT: '#bb2025',
      },
      secondary: {
        light: '#fac798',
        DEFAULT: '#f5841a',
      },
      success: '#def6ca',
      black: '#010001',
      gray: {
        light: '#c9c9c9',
        DEFAULT: '#757575',
        dark: '#262626',
      },
      white: '#ffffff',
      'floral-white': '#fffdf7',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
}
