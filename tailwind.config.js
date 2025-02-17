/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui:{
      themes: ["light"]
    },
    extend: {
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        primary: '#9d7afc',
        secondary: '#28dcb4',
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#f0ffff',
        }
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}