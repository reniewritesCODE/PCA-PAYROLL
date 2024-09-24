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
        'Green_Button': '#467E56',
        'Status_BG': '#F0F0F0',
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        'custom': '0 0px 7px 2px rgba(0, 0, 0, 0.4)'// x-offset, y-offset, blur-radius, spread-radius, color
      }
    },
  },
  plugins: [],
}

