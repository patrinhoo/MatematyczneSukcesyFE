/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      gray: {
        lighter: '#f8fafd',
        light: '#f0f2f5',
        medium: '#e2e8f0',
        mediumDark: '#cbd5e1',
        dark: '#475569',
        darker: '#1e293b',
      },
      yellow: {
        medium: '#C1C70E',
      },
      black: {
        dark: '#333333',
      },
      white: '#ffffff',
      blue: {
        medium: '#1890ff',
      },
      red: {
        medium: '#ff0000',
      },
      green: {
        light: '#87FFC5',
        medium: '#32FF70',
      },
      gold: {
        medium: '#FFD700',
      },
      theme: {
        dark: '#001529',
      },
    },
    extend: {},
  },
  plugins: [],
};
