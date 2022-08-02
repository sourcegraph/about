/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],

  // TODO: Remove this once Bootstrap is removed
  prefix: 'tw-',
}
