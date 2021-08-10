const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.coolGray,
        'on-surface': {
          DEFAULT: '#21323b',
          blue: '#1877f2',
          opaque: '#65676b',
          lightBlue: '#e7f3ff'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
