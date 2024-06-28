const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gold-gradient': 'linear-gradient(185deg, #4B3832, #F2D6A2)',
      }),
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
