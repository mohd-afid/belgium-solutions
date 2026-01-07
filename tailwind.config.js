/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#FF3333',
        },
        secondary: {
          dark: '#2C2C2C',
          gray: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}

