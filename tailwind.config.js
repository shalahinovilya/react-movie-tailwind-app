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
      }
    },
  },
  plugins: [],
}