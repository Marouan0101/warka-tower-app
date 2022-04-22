module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#88b636',
        'primary-dark': '#518360',
        secondary: '#dc582a',
        'secondary-light': '#ff983f',
        tertiary: '#113259',
        'tertiary-light': '#1e5ca3',
      },
      brightness: {
        25: '.25',
        10: '.1',
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
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' },
        },
        fade: {
          '100%': { filter: 'brightness(.3)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-in-out',
        fade: 'fade 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
