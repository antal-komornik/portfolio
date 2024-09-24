/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

module.exports = {
  content: {
    files: [/* ... */],
    extract
  },
  theme: {
    extend: {},
  },
  plugins: [
    fluid
  ],
}

