/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'movies': 'repeat(auto-fill, minmax(250px, 1fr))',
        'casts': 'repeat(auto-fill, minmax(100px, 1fr))'
      },
      keyframes: {
        slideIn: {
          '0%': { top: '0%', opacity: '0' },
          '100%': { top: '50%', opacity: '100' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out',
      },
    },
  },
  plugins: [],
}