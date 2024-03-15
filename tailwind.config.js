/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fed700',
        secondary: '#353f49',
        main_bg: '#f9f9f9',
      },

    },
  },
  plugins: [],
}