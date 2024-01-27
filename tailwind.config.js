/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3662E3',
          regular: '#1D1B48',
          default: '#111729'
        },
        gray: {
          light: '#4A5567',
          regular: '#364153',
          dark: '#20293A'
        },
        light: {
          default: '#CDD5E0'
        },
        dark: {
          default: '#0F0F0F'
        }
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        large: '2rem'
      }
    }
  },
  plugins: []
}
