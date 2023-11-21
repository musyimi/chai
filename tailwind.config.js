/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {  
    extend: {
      colors: {
        primary1: '#34536A',
        primary2: '#5A7E99',
        primary3: '#E65738',
        primary4: '#FEE4D6',
        primary5: '#293441',
        primary5: '#e5e7eb'
      },
    },
  },
  plugins: [],
}

