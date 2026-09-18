import { createTheme } from '@mui/material/styles';

/**
 * 색상 팔레트 디자인 시스템.md 에서 정의한 Material Design 3 색상 토큰
 * index.css 의 CSS 변수(:root, prefers-color-scheme, [data-theme]) 값을 그대로 참조하므로
 * 라이트/다크 모드 전환 시 컴포넌트 코드 수정 없이 자동으로 색상이 바뀐다.
 */
export const colors = {
  primary: 'var(--md-primary)',
  onPrimary: 'var(--md-on-primary)',
  primaryContainer: 'var(--md-primary-container)',
  onPrimaryContainer: 'var(--md-on-primary-container)',

  tertiary: 'var(--md-tertiary)',
  onTertiary: 'var(--md-on-tertiary)',
  tertiaryContainer: 'var(--md-tertiary-container)',
  onTertiaryContainer: 'var(--md-on-tertiary-container)',
  tertiaryHover: 'color-mix(in srgb, var(--md-tertiary) 88%, var(--md-on-tertiary) 12%)',

  surface: 'var(--md-surface)',
  surfaceContainer: 'var(--md-surface-container)',
  surfaceContainerHigh: 'var(--md-surface-container-high)',
  surfaceContainerHighest: 'var(--md-surface-container-highest)',
  onSurface: 'var(--md-on-surface)',
  onSurfaceVariant: 'var(--md-on-surface-variant)',

  outline: 'var(--md-outline)',
  outlineVariant: 'var(--md-outline-variant)',

  error: 'var(--md-error)',
  onError: 'var(--md-on-error)',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.onPrimary,
    },
    background: {
      default: colors.surface,
      paper: colors.surfaceContainer,
    },
    text: {
      primary: colors.onSurface,
      secondary: colors.onSurfaceVariant,
      disabled: colors.outline,
    },
    error: {
      main: colors.error,
      contrastText: colors.onError,
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
