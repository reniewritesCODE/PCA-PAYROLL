/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Green_base': '#0E4736',
        'white': '#FFFFFF',
        'white_base': '#EFEFED'
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

