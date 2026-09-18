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

/**
 * MUI createTheme 의 palette 는 라이트/다크 셰이드를 자동 계산하기 위해
 * decomposeColor 로 실제 색상 값을 파싱하므로 var(--md-xxx) 문자열을 넣으면
 * "Unsupported color" 에러로 앱 전체가 렌더링되지 않는다.
 * 따라서 palette 에는 라이트 모드 리터럴 값만 사용하고, 실제 다크모드 대응 색상은
 * 각 컴포넌트의 sx 에서 위 colors(CSS 변수) 객체를 직접 참조해 처리한다.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#8F4B3A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFF8F6',
      paper: '#FCEAE6',
    },
    text: {
      primary: '#231917',
      secondary: '#534340',
      disabled: '#85736F',
    },
    error: {
      main: '#BA1A1A',
      contrastText: '#FFFFFF',
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
