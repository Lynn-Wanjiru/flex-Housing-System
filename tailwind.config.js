/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     colors: {
       brightcolor: 'white',
       backgroundcolor: '#89CFF0',
     },
    },
  },
  plugins: [],
}

