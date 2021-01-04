module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'var(--color-secondary)',
        surface: 'var(--color-surface)',
        gray: {
          '100': 'var(--color-gray100)',
          '200': 'var(--color-gray200)',
          '300': 'var(--color-gray300)',
          '400': 'var(--color-gray400)',
          '500': 'var(--color-gray500)',
          '600': 'var(--color-gray600)',
          '700': 'var(--color-gray700)',
          '800': 'var(--color-gray800)',
          '900': 'var(--color-gray900)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
