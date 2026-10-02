import * as React from 'react';
import Box from '@mui/material/Box';

const BLOB_FLOAT_SX = {
  '@keyframes heroBlobFloat': {
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '50%': { transform: 'translate(24px, -28px) scale(1.06)' },
  },
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
};

const OUTLINE_SHAPE_SX = {
  display: { xs: 'none', md: 'block' },
  position: 'absolute',
  border: '2px solid var(--md-outline-variant)',
};

/**
 * HeroBackground 컴포넌트
 * Hero 의 디자이너 감성 배경 (장식 전용, 클릭/스크린 리더 대상 아님)
 * 부드러운 컬러 그라데이션 + 점 그리드 + 천천히 떠다니는 블러 도형 + 얇은 라인 도형으로 구성한다
 * 색상은 Material 3 토큰을 쓰므로 다크 모드에서도 자동으로 어울린다
 *
 * Example usage:
 * <Box sx={{ position: 'relative' }}><HeroBackground />...</Box>
 */
function HeroBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: [
            'radial-gradient(60% 55% at 88% 8%, color-mix(in srgb, var(--md-tertiary-container) 75%, transparent), transparent 70%)',
            'radial-gradient(55% 60% at 4% 92%, color-mix(in srgb, var(--md-primary-container) 85%, transparent), transparent 70%)',
          ].join(', '),
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(color-mix(in srgb, var(--md-outline) 40%, transparent) 1.2px, transparent 1.2px)',
          backgroundSize: '26px 26px',
          maskImage: 'linear-gradient(to bottom, #000 0%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 85%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: { xs: -80, md: -60 },
          right: { xs: -100, md: '6%' },
          width: { xs: 260, md: 420 },
          height: { xs: 260, md: 420 },
          borderRadius: '50%',
          backgroundColor: 'var(--md-primary-container)',
          filter: 'blur(70px)',
          opacity: 0.7,
          animation: 'heroBlobFloat 16s ease-in-out infinite',
          ...BLOB_FLOAT_SX,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 60, md: 40 },
          left: { xs: -80, md: '-4%' },
          width: { xs: 220, md: 340 },
          height: { xs: 220, md: 340 },
          borderRadius: '50%',
          backgroundColor: 'var(--md-tertiary-container)',
          filter: 'blur(60px)',
          opacity: 0.65,
          animation: 'heroBlobFloat 20s ease-in-out infinite reverse',
          ...BLOB_FLOAT_SX,
        }}
      />

      <Box
        sx={{
          ...OUTLINE_SHAPE_SX,
          top: '12%',
          right: '34%',
          width: 120,
          height: 120,
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          ...OUTLINE_SHAPE_SX,
          bottom: '18%',
          left: '44%',
          width: 56,
          height: 56,
          borderRadius: 1.5,
          transform: 'rotate(18deg)',
        }}
      />
    </Box>
  );
}

export default HeroBackground;
