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
      aboutFarm: '#123c06',
      aboutFarmPar: '#262626',
      iconColor: '#8aa082',
      backgroundGreen: '#164006',
    },
    extend: {
      backgroundImage: {
        'header-section': "url('img/banner-bg.png')",
      },
      boxShadow: {
        '3xl': '0px -4px 26px -11px',
      },
    },
  },
  plugins: [],
};
