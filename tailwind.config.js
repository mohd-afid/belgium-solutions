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
          red: '#ed1c24',
          hover: '#c4131a',
        },
        secondary: {
          dark: '#222222',
          gray: '#3a3a3a',
          light: '#f5f5f5',
          border: '#dedede',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
      maxWidth: {
        'be-wrap': '1160px',
      },
    },
  },
  plugins: [],
}
