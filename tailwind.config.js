/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
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
      blue: "#174664",
      lightBlue: "#3056D3",
      darkBlue: "#112B3C",
      yellow: "#F2AB1C",
      darkYellow: "#eaa20e",
      lightGrey: "#80808012",
    },
    fontSize: {
      sm: "1rem",
      base: "1.25rem",
      m: "1.75rem",
      l: "2rem",
      xl: "2.5rem",
      "2xl": "3.125rem",
      "3xl": "3.906rem",
      "4xl": "4.882rem",
      "5xl": "6.103rem",
      "6xl": "7.5rem",
      "9xl": "16rem",
    },
    // fontSize: { this set of fonts looks better for need some refactoring if we want to implement it
    //   sm: "0.875rem",
    //   base: "1rem",
    //   m: "1.375rem",
    //   l: "1.5rem",
    //   xl: "1.875rem",
    //   "2xl": "2.34375rem",
    //   "3xl": "2.929375rem",
    //   "4xl": "3.66475rem",
    //   "5xl": "4.579375rem",
    //   "6xl": "5.625rem",
    //   "9xl": "12rem",
    // },
  },
  plugins: [],
});
