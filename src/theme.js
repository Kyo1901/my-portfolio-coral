import { createTheme } from '@mui/material/styles';

/**
 * 컬러 팔레트 디자인 시스템.md 에서 추출한 원본 컬러 값
 * (MUI palette 로 표현하기 어려운 색상은 컴포넌트에서 sx={{ color: colors.xxx }} 형태로 직접 사용)
 */
export const colors = {
  primary: '#FC9C84',
  primaryLight: '#FDB09D',
  primaryDark: '#CA7D6A',
  secondary: '#F8EEE1',
  accent: '#8490C8',
  bgPrimary: '#FC9C84',
  bgSecondary: '#F8EEE1',
  textPrimary: '#292929',
  textSecondary: '#B06F4F',
  textMuted: '#8A8A8A',
  buttonPrimary: '#F8EEE1',
  buttonHover: '#DFD6CB',
  link: '#8490C8',
  linkHover: '#707AAA',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.textPrimary,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.buttonHover,
      contrastText: colors.textPrimary,
    },
    background: {
      default: colors.bgSecondary,
      paper: colors.secondary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textMuted,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
