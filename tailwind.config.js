/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')        

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        black: colors.black,
        white: colors.white,
        red: colors.red,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        blue: '#174664',
        lightBlue: '#3056D3',
        darkBlue: "#112B3C",
        yellow: "#F2AB1C",
        darkYellow: '#eaa20e',
        lightGrey: "#80808012"
      },
      fontSize: {
        sm: '1rem',
        base: '1.25rem',
        m: '1.75rem',
        l: '2rem',
        xl: '2.5rem',
        '2xl': '3.125rem',
        '3xl': '3.906rem',
        '4xl': '4.882rem',
        '5xl': '6.103rem',
        '6xl': '7.5rem',
        '9xl': '16rem',
      }
  },
  plugins: [],
};
