/** @type {import('tailwindcss').Config} */
export default {
  content:['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "pink":"#FFC6DA",
        "yellow":"#FFF1A6",
        "blue":"#BAD8EB",
        "blue-20":"#124C5F"
      },
      fontFamily:{
        'pangolin':"Pangolin",
        "roboto":"Roboto"
      }
    },
  },
  plugins: [],
}

