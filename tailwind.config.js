/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#E0F0F0',
          100: '#B8E0E0',
          200: '#8CD1D1',
          300: '#5FC2C2',
          400: '#3FB3B3',
          500: '#2A8B8B',
          600: '#247777',
          700: '#1E6363',
          800: '#184F4F',
          900: '#123B3B',
        },
      },
    },
  },
  plugins: [],
};