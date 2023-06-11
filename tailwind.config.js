/** @type {import('tailwindcss').Config} */
import zen from './dist/tailwind.preset'

export default {
  content: ['./src/**/*.vue'],
  darkMode: 'class',
  presets: [zen()]
}
