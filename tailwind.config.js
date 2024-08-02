/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter", sans-serif'],
      },
      colors: {
        // Primary
          'primary-green': 'hsl(75, 94%, 57%)',

        // Neutral
          'neutral-white': 'hsl(0, 0%, 100%)',
          'neutral-grey': 'hsl(0, 0%, 20%)',
          'neutral-dark-grey': 'hsl(0, 0%, 12%)',
          'neutral-off-black': 'hsl(0, 0%, 8%)',
      },
      screens: {
        // @media (min-width: ...) {}
          'xs': '475px',  // => @media (min-width: 475px) { ... }
        
        // @media (max-width: ...) {}
          // 'max-screen-xs': {'max': '425px'}, // => @media (max-width: 425px) { ... }
      },
    },
  },
  plugins: [],
}