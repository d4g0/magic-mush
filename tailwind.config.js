const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', "Helvetica Neue"],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        ...colors,
        gray: colors.coolGray,
        header: '#202124',
        subtittle: '#0077CC',
        light: '#E8EDF3',
        text: '#2D3748',
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
