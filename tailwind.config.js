// tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', 'components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      gochi: ['Gochi Hand', 'cursive'],
      roboto: ['Roboto Mono', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
