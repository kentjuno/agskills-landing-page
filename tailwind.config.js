/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9d4edd',
          hover: '#c77dff',
          glow: 'rgba(157, 78, 221, 0.5)'
        },
        background: '#0a0a0f',
        surface: '#151520',
        'surface-elevated': '#1e1e2d',
      },
      animation: {
        'glow-pulse': 'glow 3s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(157, 78, 221, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
