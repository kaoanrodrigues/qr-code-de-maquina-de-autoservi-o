/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#32CD32',
          secondary: '#98D7D2',
          accent: '#C3DEDC',
          text: '#868686',
          bg: '#FFFFFF',
          dark: '#1a1a1a',
          light: '#F8F9FA'
        }
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
