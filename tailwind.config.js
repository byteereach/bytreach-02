/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#E6FF2B',
        'neon-blue': '#00F0FF',
        'neon-purple': '#B026FF',
        'deep-teal': '#064B59',
        'deep-teal-dark': '#043943',
        'soft-white': '#F0FFF2',
        'neutral-grey': '#898A80',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(230, 255, 43, 0.3)',
        'neon-blue': '0 0 15px rgba(0, 240, 255, 0.3)',
        'card': '0 10px 30px -10px rgba(6, 75, 89, 0.15)',
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}