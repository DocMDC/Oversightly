/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00beac',
        secondary: '#f9fafb',
        alternative: '#0b2033',
        highlight: '#009989'
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%': {transform: 'translateY(0%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'}
        }
      },
      animation: {
        'bounce-slow': 'bounce 2.5s infinite'
      }
    },
  },
  plugins: [],
}
