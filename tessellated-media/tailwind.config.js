/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b82b3', // teal/electric blue as accent color
          dark: '#096990',
          light: '#0ca0db',
        },
        dark: {
          DEFAULT: '#333333', // charcoal
          light: '#4d4d4d',
          dark: '#262626',
        },
        light: {
          DEFAULT: '#f5f5f5', // off-white
          dark: '#e6e6e6',
        },
        metallic: {
          DEFAULT: '#c0c0c0', // subtle metallic
          dark: '#a0a0a0',
          light: '#d4d4d4',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'geometric-pattern': "url('/src/assets/images/geometric-bg.svg')",
      },
      height: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}