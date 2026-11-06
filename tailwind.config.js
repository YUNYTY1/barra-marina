/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#0B3A4B', // azul petróleo (botones, títulos sobre crema)
        sea: '#05384A', // fondo sección Especialidades
        night: '#172A31', // fondo sección Experiencia / footer
        abyss: '#0A1B26', // fondo sección Reseñas
        cream: '#F5F1E9',
        coral: '#FF6B3D',
        mint: '#3DD6A0',
        aqua: '#19B5A5',
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        heading: ['"Archivo Variable"', 'Archivo', 'Arial', 'sans-serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
