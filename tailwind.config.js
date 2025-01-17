/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'], // Add the Urbanist font here
      },
      colors: {
        primary: {
          DEFAULT: '#44A0E4',
          100: '#44A0E4',
          200: '#44A0E4'
        },
      'custom-blue': '#44A0E4',
    },
  },
  },
  plugins: [],
}

