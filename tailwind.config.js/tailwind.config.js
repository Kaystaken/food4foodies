/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        beige: 'fffede',
        orange: '#f9842d',
        pink: '#cd2051',
        blue: '#296089',
    },
  },
  plugins: [],
}