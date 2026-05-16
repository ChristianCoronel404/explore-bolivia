/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bolivia-red': '#D52B1E',
        'bolivia-yellow': '#F9E076',
        'bolivia-green': '#007A33',
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
