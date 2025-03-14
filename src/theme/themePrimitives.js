import { createTheme, alpha } from "@mui/material/styles";

const defaultTheme = createTheme();

const customShadows = [...defaultTheme.shadows];

// SETUP COLORS
export const GREY = {
  0: '#FFFFFF',
  50: '#FDFEFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8)
};
export const PRIMARY = {
  lighter: '#5C54BF',
  light: '#3C358F',
  main: '#242056',
  dark: '#1D1A45',
  darker: '#161334',
  contrastText: '#fff',
};
export const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#242056',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff'
};
export const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
};
export const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800]
};
export const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800]
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D', 
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff'
};

export const getDesignTokens = () => {
  return {
    palette: {
      common: { black: "#000", white: "#fff" },
      primary: PRIMARY,
      secondary: SECONDARY,
      info: INFO,
      success: SUCCESS,
      warning: WARNING,
      error: ERROR,
      grey: GREY,
      divider: alpha(GREY[500], 0.24),
      text: {
        primary: GREY[800],
        secondary: GREY[600],
        disabled: GREY[500],
      },
      background: {
        paper: "#fff",
        primary: "#E4E2F4",
        default: GREY[100],
        neutral: GREY[200],
      },
      action: {
        active: GREY[600],
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
      },
    },
    typography: {
      fontFamily: ['"Inter", "sans-serif"'].join(","),
      h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
      },
      h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
      },
      subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
      },
      caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: customShadows,
  };
};
