/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor:{
        'primary' : 'rgb(85 81 227)'
      }
    },

    fontFamily:{
      'Main-Font' : 'Sriracha'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
