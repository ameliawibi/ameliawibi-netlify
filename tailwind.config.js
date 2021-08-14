module.exports = {
  // to remove any unused classes for the smallest file size
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      pointerEvents: ['disabled'],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
