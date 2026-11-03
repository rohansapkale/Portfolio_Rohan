/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
        mono: ['"Ubuntu Mono"', 'monospace'],
      },
      colors: {
        corp: {
          bg: '#090b10',
          surface: '#10141d',
          elevated: '#161c28',
          border: '#1e2533',
          borderStrong: '#2a3447',
          blue: '#2563eb',
          blueHover: '#1d4ed8',
          blueLight: '#3b82f6'
        }
      }
    },
  },
  plugins: [],
}
