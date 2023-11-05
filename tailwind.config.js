/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary': '#E80202',
      'texto': '#061422',
      'secondary': '#C7DEF5',
      'accent': '#2F6BA7',
      'back': '#DDEBF9',
    },
    extend: {
      fontFamily: {
        'titulo': ['Audiowide'],
        'titulo2': ['Reem Kufi'],
        'parrafo': ['Josefin Sans']
      },
    },
  },
  plugins: [],
}

