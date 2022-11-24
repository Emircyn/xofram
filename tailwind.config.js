/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#95D03A',
      white: '#FFFFFF',
      linkHover: '#a3b104',
      heroText: '#C5D512',
      black: '#000',
      servicesText: '#143e07',
    },
    extend: {
      backgroundImage: {
        'header-section': "url('img/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
