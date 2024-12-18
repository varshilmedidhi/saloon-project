/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          50: '#fdf6f3',
          100: '#f9e9e2',
          200: '#f4d2c5',
          300: '#ecb19d',
          400: '#e28a70',
          500: '#d5643f',
          600: '#c54e35',
          700: '#a43d2d',
          800: '#85352b',
          900: '#6d2f27',
          950: '#3a1612',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: []
};