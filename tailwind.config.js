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
        'white_base': '#EFEFED',
        'Green_Button': '#467E56'
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

