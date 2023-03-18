/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {
      colors: {
        white: "#FFFFFF",
        darkBlue: "#112B3C",
        yellow: "#F2AB1C",
        darkYellow: '#eaa20e',
        grey: "#808080",
      },
      fontSize: {
        sm: '16px',
        base: '20px',
        m: '26px',
        l: '44px',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.75rem',
        '9xl': '8rem',
      }
    // },
  },
  plugins: [],
};
