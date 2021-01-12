export const COLORS = {
  //text and bg applied to whole document
  text: {
    light: 'hsl(0deg, 0%, 10%)', // grey-ish
    dark: 'hsl(0deg, 0%, 90%)', // white
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: '#121212', // recommended material design surface colour
  },

  //shaders
  light: {
    light: '90%', // blue #4895ea
    dark: '30%', // orange #fbc15e
  },
  normal: {
    light: '60%', // blue #4895ea
    dark: '68%', // orange #fbc15e
  },

  //rest of constants used within tailwindcss classes
  //originally had hue & saturation values in a separate object,
  //but adjusting luminance to achieve different shades doesn't work with light/dark mode
  //(ex: lighter blue in light mode = less contrast, lighter orange in dark mode = more contrast)
  primaryHS: {
    light: '211, 79%,', // blue #4895ea
    dark: '38, 95%,', // orange #fbc15e
  },
  secondary: {
    light: 'hsl(211, 79%, 90%)', // light-blue
    dark: 'hsl(38, 80%, 30%)', // dark-orange
  },

  primary: {
    light: 'hsl(var(--primaryHS) var(--normal))', // blue #4895ea
    dark: 'hsl(var(--primaryHS) var(--normal))', // orange #fbc15e
  },
  primaryLight: {
    light: 'hsl(var(--primaryHS) var(--light))', // blue #4895ea
    dark: 'hsl(var(--primaryHS) var(--light))', // orange #fbc15e
  },

  surface: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: '#121212', // dark, dark grey
  },

  translucent: {
    light: '25%', // white
    dark: '50%', // dark, dark grey
  },

  // Grays, scaling from least-noticeable to most-noticeable
  gray100: {
    light: 'hsl(0deg, 0%, 90%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray200: {
    light: 'hsl(0deg, 0%, 80%)',
    dark: 'hsl(0deg, 0%, 40%)',
  },
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray400: {
    light: 'hsl(0deg, 0%, 60%)',
    dark: 'hsl(0deg, 0%, 60%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
  gray600: {
    light: 'hsl(0deg, 0%, 40%)',
    dark: 'hsl(0deg, 0%, 75%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 80%)',
  },
  gray800: {
    light: 'hsl(0deg, 0%, 20%)',
    dark: 'hsl(0deg, 0%, 85%)',
  },
  gray900: {
    light: 'hsl(0deg, 0%, 10%)',
    dark: 'hsl(0deg, 0%, 90%)',
  },

  invert: {
    light: '',
    dark: 'invert(1) brightness(1.5)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
