/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss-text-fill-stroke"
//const plugin = require('tailwindcss-text-fill-stroke');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        1: '1px',
        2: '2px',
        4: '4px',
      },
      textStrokeColor: {
        black: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mangas': "url('./src/assets/mangaBackground.jpg')",
        'manager': "url('./src/assets/managerBackground.jpg')",
      },
    },
  },
  plugins: [plugin()],
}

