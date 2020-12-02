// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // FontFamily: {
      //   sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans]
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
