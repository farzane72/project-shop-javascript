/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      animation: {
        'loading': 'loading 1s ease infinite', 
      },
      keyframes: {
        loading: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },

    }
  }
  },
  plugins: [],
}

