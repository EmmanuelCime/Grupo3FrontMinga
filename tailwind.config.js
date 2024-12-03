/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mangas': "url('./src/assets/mangaBackground.jpg')",
        'manager': "url('./src/assets/managerBackground.jpg')",
      },
    },
  },
  plugins: [],
}

