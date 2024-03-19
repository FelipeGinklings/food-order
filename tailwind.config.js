/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        inherit: ['inherit'],
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.3s ease-out forwards',
      },
      keyframes: {
        'fade-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(4rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      colors: {
        'black-opacity-55': 'rgba(0, 0, 0, 0.55)',
        'very-dark-brow': '#1d1a16',
      },
    },
  },
  plugins: [],
};
