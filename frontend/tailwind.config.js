/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#4f46e5', 
  //       secondary: '#10b981', 
  //       light: '#f9fafb',
  //       // soft_green:'#cee4ce',
  //       soft_green:'#e3f3e1',
  //       dark: '#111827',
  //       gold: '#facc15',
  //     },
  //     fontFamily: {
  //       sans: ['Inter', 'ui-sans-serif', 'system-ui'],
  //     },
  //     keyframes: {
  //       fadeInUp: {
  //         '0%': { opacity: 0, transform: 'translateY(20px)' },
  //         '100%': { opacity: 1, transform: 'translateY(0)' },
  //       },
  //     },
  //     animation: {
  //       fadeInUp: 'fadeInUp 0.6s ease-out forwards',
  //     },
  //   },
  // },
// tailwind.config.js
    theme: {
      extend: {
        colors: {
          primary: '#4f46e5',
          secondary: '#10b981',
          light: '#f9fafb',
          soft_green: '#e3f3e1',
          dark: '#111827',
          gold: '#facc15',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          text: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
        },
        animation: {
          fadeInUp: 'fadeInUp 0.6s ease-out forwards',

          text: 'text 6s ease infinite',
        },
      },
    },

  plugins: [],
}