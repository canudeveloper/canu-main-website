module.exports = {
  theme: {
    extend: {
      boxShadow: {
        underline: 'inset 0px -4px 0px 0px #bb2025',
      },
      fontSize: {
        button: '0.875rem',
      },
      letterSpacing: {
        button: '0.25em',
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
