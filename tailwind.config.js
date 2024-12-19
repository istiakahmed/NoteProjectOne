/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
         'brandColor':"#F26B0F"
      },
    },
    container: {
      center: true,
    },
    fontFamily:{
      poppins:["Poppins", "serif"]
    },
  },
  plugins: [],
}