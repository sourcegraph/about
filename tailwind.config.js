/** @type {import('tailwindcss').Config} */
module.exports = {

  // Files run through Tailwind
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  
  // Theme based on our Marketing DLS
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#F9FAFB',
        100: '#F5F7FB',
        200: '#EBEFF3',
        300: '#ABB3C1',
        400: '#696B71',
        500: '#484B51',
        600: '#313131',
        700: '#121212',
      },
      blue: {
        100: '#DCFEFE',
        200: '#C7FFFF',
        300: '#00CBEC',
        400: '#00A1C7',
        500: '#005482',
      },
      vermillion: {
        100: '#FFDFDC',
        200: '#FFC9C9',
        300: '#FF5543',
        400: '#ED2E20',
        500: '#C22626',
      },
      lemon: {
        200: '#FFF2CF',
        300: '#FFDB45',
        400: '#FFC247',
        500: '#FF9933',
      },
      green: {
        100: '#D2FFF1',
        200: '#C4FFE8',
        300: '#8FEDCF',
        400: '#17AB52',
        500: '#1F7D45',
      },
      blurple: {
        100: '#DBDBFF',
        200: '#BFBFFF',
        300: '#6B59ED',
        400: '#5033E1',
        500: '#3826CC',
      },
      violet: {
        100: '#EEDFFF',
        200: '#E8D1FF',
        300: '#CE9CFF',
        400: '#A112FF',
        500: '#820DDE',
        600: '#6112A3',
      },
      cerise: {
        100: '#FFDFF5',
        200: '#FFD1F2',
        300: '#E1449A',
        400: '#D62687',
        500: '#C4147D',
        600: '#9E1769',
      },
    }),

    fontFamily: {
      primary: ['Source Sans Pro', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },

    // TODO
    // fontSize: {
    //   'display-h1': ''
    // },

    spacing: {
      xxs: '16px',
      xs: '24px',
      sm: '32px',
      md: '48px',
      lg: '64px',
      xl: '96px',
    },

    // This extends (not replaces) theme properties
    extend: {

      // Breakpoints and responsive modifiers
      screens: {
        xs: '480px',
      }

    }
  },

  /**
   * Prefix added before Tailwind classes
   * TODO: Remove this once Bootstrap is removed completely
   */
  prefix: 'tw-',
  
  plugins: [],
}
