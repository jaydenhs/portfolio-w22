export const COLORS = {
  //text and bg applied to whole document
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)', // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    dark: 'hsl(250deg, 70%, 7%)', // navy navy blue
  },

  //rest of constants used within tailwindcss classes
  primary: {
    light: '#4895EA', // blue
    dark: '#fbc15e', // orange
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)', // Cyan
  },

  // Grays, scaling from least-noticeable to most-noticeable
  gray100: {
    light: 'hsl(0deg, 0%, 90%)',
    dark: 'hsl(0deg, 0%, 10%)',
  },
  gray200: {
    light: 'hsl(0deg, 0%, 80%)',
    dark: 'hsl(0deg, 0%, 20%)',
  },
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray400: {
    light: 'hsl(0deg, 0%, 60%)',
    dark: 'hsl(0deg, 0%, 40%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray600: {
    light: 'hsl(0deg, 0%, 40%)',
    dark: 'hsl(0deg, 0%, 60%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
  gray800: {
    light: 'hsl(0deg, 0%, 20%)',
    dark: 'hsl(0deg, 0%, 80%)',
  },
  gray900: {
    light: 'hsl(0deg, 0%, 90%)',
    dark: 'hsl(0deg, 0%, 10%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
