module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#88b636',
        'primary-dark': '#518360',
        secondary: '#dc582a',
        'secondary-light': '#bc6c25',
        tertiary: '#113259',
        'tertiary-light': '#0075ff',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' },
        },
        'fade-in': {
          '0%': { filter: 'brightness(0)' },
          '100%': { filter: 'brightness(1)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1.5s ease-out',
        'fade-in': 'fade-in 3s ease-in-out',
      },
      screens: {
        xs: '475px',
      },
      backgroundImage: {
        'tower-1': "url('/src/images/warka-tower-1.jpg')",
        'tower-2': "url('/src/images/warka-tower-2.jpg')",
        'tower-3': "url('/src/images/warka-tower-3.jpg')",
        'tower-4': "url('/src/images/warka-tower-4.jpg')",
      },
    },
  },
  plugins: [],
};
