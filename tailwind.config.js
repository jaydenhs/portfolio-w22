module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: {
          light: 'hsl(var(--primaryHS) var(--light))',
          DEFAULT: 'hsl(var(--primaryHS) var(--normal))',
        },
        secondary: 'var(--secondary)',
        surface: 'var(--surface)',
        gray: {
          100: 'var(--gray100)',
          200: 'var(--gray200)',
          300: 'var(--gray300)',
          400: 'var(--gray400)',
          500: 'var(--gray500)',
          600: 'var(--gray600)',
          700: 'var(--gray700)',
          800: 'var(--gray800)',
          900: 'var(--gray900)',
        },
      },
      spacing: {
        128: '32rem',
      },
      scale: {
        '-1': '-1',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  variants: {
    extend: {
      flexDirection: ['even'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
