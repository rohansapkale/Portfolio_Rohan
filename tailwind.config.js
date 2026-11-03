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
        obsidian: {
          950: '#050507',
          900: '#08080a',
          850: '#0d0d11',
          800: '#121217',
          750: '#17171e',
          700: '#1f1f28',
        },
        crimson: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          glow: 'rgba(220, 38, 38, 0.28)',
        },
        corp: {
          bg: '#08080a',
          surface: '#0d0d11',
          elevated: '#121217',
          border: 'rgba(255, 255, 255, 0.08)',
          borderStrong: 'rgba(255, 255, 255, 0.16)',
        }
      },
      boxShadow: {
        'crimson-glow': '0 0 45px -10px rgba(220, 38, 38, 0.35)',
        'crimson-card': '0 10px 30px -10px rgba(0, 0, 0, 0.9), 0 0 25px -5px rgba(220, 38, 38, 0.18)',
        'white-pill': '0 0 25px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
