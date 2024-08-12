/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const typography = require('@tailwindcss/typography')
const colors = require('tailwindcss/colors')

const dlsColors = {
  white: '#ffffff',
  black: '#000000',
  slate: colors.slate,
  amber: colors.amber,
  red: colors.red,
  sky: colors.sky,
  cyan: colors.cyan,
  blue: colors.blue,
  purple: colors.purple,
  indigo: colors.indigo,
  slate: colors.slate,
  yellow: colors.yellow,
  'light-bg': '#F9FAFB',
  'dark-bg-1': '#181B26',
  'dark-bg-2': '#1D212F',
  'dark-bg-3': '#343A4D',
  'light-bg-1': '#FFF',
  'light-bg-2': '#E6EBF2',
  'light-bg-3': '#DBE2F0',
  'dark-border': '#262B38',
  'dark-border-2': '#343A4C',
  'light-border': '#E6EBF2',
  'light-border-2': '#DBE2F0',
  'dark-text-muted': '#A6B6D9',
  'light-text-muted': '#5E6E8C',
  gray: {
    50: '#F9FAFB',
    75: '#EBEBEB',
    100: '#F5F7FB',
    200: '#DBE2F0',
    300: '#A6B6D9',
    400: '#696B71',
    500: '#374151',
    600: '#1F2A37',
    700: '#111928',
    800: '#14171f',
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
    50: '#C9C9C9',
    100: '#FFFCB1',
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
    700: '#270741',
    750: '#1e0632',
    800: '#160425',
  },
  cerise: {
    100: '#FFDFF5',
    200: '#FFD1F2',
    300: '#E1449A',
    400: '#D62687',
    500: '#C4147D',
    600: '#9E1769',
  },
}

module.exports = {
  // Files run through Tailwind
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],

  // Theme based on our Marketing DLS
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      'dark-bg': '#14171F',
      'light-bg': '#F9FAFB',
      'link': {
        light: '#3098aa',
        DEFAULT: '#62BECC',
      },
      'link-underline': '#2a7c90',
      'link-underline-light': '#00CBEC',
      ...dlsColors,
    }),

    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      mono: [
        'Roboto mono',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      display: ['Space Grotesk'],
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5' }], // 12px / 18px
      sm: ['0.875rem', { lineHeight: '1.5' }], // 14px / 21px
      base: ['1rem', { lineHeight: '1.5' }], // 16px / 24px
      lg: ['1.125rem', { lineHeight: '1.5' }], // 18px / 27px
      xl: ['1.25rem', { lineHeight: '1.5' }], // 20px / 28px
      '2xl': ['1.5rem', { lineHeight: '1.4' }], // 24px / 34px
      '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px / 42px
      '4xl': ['2.25rem', { lineHeight: '1.2' }], // 36px / 43px
      '5xl': ['2.5rem', { lineHeight: '1.2' }], // 40px / 48px
      '6xl': ['3rem', { lineHeight: '1.2' }], // 48px / 58px
      '7xl': ['3.25rem', { lineHeight: '1.2' }], // 52px / 62px
      '8xl': ['3.875rem', { lineHeight: '1.2' }], // 72px / 74px
    },

    letterSpacing: {
      tightest: '-1px',
      tighter: '-0.5px',
      tight: '-0.25px',
      normal: 0,
      wide: '0.25px',
    },

    // This extends (not replaces) theme properties
    extend: {
      /**
       * Breakpoints and responsive modifiers.
       * Other than xs, we use the default Tailwind breakpoints.
       * See: https://tailwindcss.com/docs/responsive-design
       * sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
       */
      lineHeight: {
        'extra-tight': '57.6px',
        'custom-150': '150%',
      },
      letterSpacing: {
        'extra-tight': '-1px',
        'custom-tight': '-0.25px',
      },
      screens: {
        xs: '480px',
        md: '830px',
        mdi: { min: '1024px' },
        lg: '1124px',
      },

      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
      },

      borderWidth: {
        1: '1px',
        3: '3px',
        16: '16px',
      },

      keyframes: {
        flashBackground: {
          '0%': { background: dlsColors.lemon[200] },
          '100%': { backgroundColor: 'none' },
        },
        fadeOutSlow: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },

      animation: {
        'flash-background': 'flashBackground 1s ease-out',
        fadeOutSlow: 'fadeOut 1s ease-out',
        fadeIn: 'fadeIn 0.175s ease-in forwards',
        fadeInSlow: 'fadeIn 0.5s ease-in forwards',
        slideFadeIn: 'slideFadeIn 2s ease-in-out',
      },

      dropShadow: {
        xl: `0px 0px 15px ${dlsColors.violet['400']}`,
        '2xl': `0px 0px 38px ${dlsColors.violet['400']}`,
      },
      boxShadow: {
        xl: `0px 0px 23px ${dlsColors.violet['400']}`,
        btn: `0px 0px 20px rgba(161, 18, 255, 0.7)`,
        modal: `0px 5px 23px rgba(0, 0, 0, 0.2)`,
        card: `0px 0px 20px -2px #A112FF80`,
        video: `0px 0px 40px 3px rgba(161, 18, 255, 0.50)`,
        cta: `0px 25px 50px -12px rgba(0, 0, 0, 0.25)`,
      },
    },
  },

  plugins: [
    typography,
    plugin(({ addBase }) => {
      const extractColors = (colors, colorGroup = '') => {
        return Object.keys(colors).reduce((previousColors, colorKey) => {
          const value = colors[colorKey]
          const cssVariable = colorGroup ? `--sg-color-${colorGroup}-${colorKey}` : `--sg-color-${colorKey}`

          const newColors = typeof value === 'string' ? { [cssVariable]: value } : extractColors(value, colorKey)

          return { ...previousColors, ...newColors }
        }, {})
      }

      addBase({
        ':root': extractColors(dlsColors),
      })
    }),
  ],
}
