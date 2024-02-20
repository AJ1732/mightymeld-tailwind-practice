/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey90': '#E6E6E6',
        'grey60': '#98989A',
        'grey15': '#262626',
        'grey10': '#1A1A1A',
        'green50': '#9EFF00',
      },
      
    },
  },
  plugins: [],
}

