import * as React from 'react';
import Box from '@mui/material/Box';
import { colors } from '../../theme.js';

const REPEAT_COUNT = 6;

/**
 * MarqueeStrip 컴포넌트
 * 키워드 띠가 오른쪽에서 왼쪽으로 천천히 흘러가는 마퀴
 * 같은 내용을 두 번 이어 붙여 translateX(0 → -50%) 로 끊김 없이 반복한다
 * 마우스를 올리면 일시정지하고, 모션 감소 설정(prefers-reduced-motion)이면 정지한 텍스트로 표시한다
 *
 * Props:
 * @param {string} text - 띠에 흘러갈 문구 [Required]
 * @param {number} duration - 한 바퀴 도는 시간(초) [Optional, 기본값: 36]
 *
 * Example usage:
 * <MarqueeStrip text="UI/UX DESIGN · PLANNING · FRONT-END · AI" />
 */
function MarqueeStrip({ text, duration = 36 }) {
  const phrases = Array.from({ length: REPEAT_COUNT }, (_, index) => index);

  return (
    <Box
      role="img"
      aria-label={text}
      sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: { xs: 1.5, md: 2 },
        backgroundColor: colors.primaryContainer,
        color: colors.onPrimaryContainer,
        '&:hover > .marquee-strip__track': { animationPlayState: 'paused' },
      }}
    >
      <Box
        className="marquee-strip__track"
        aria-hidden="true"
        sx={{
          display: 'inline-flex',
          animation: `marqueeStripMove ${duration}s linear infinite`,
          '@keyframes marqueeStripMove': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-50%)' },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        {[0, 1].map((copy) => (
          <Box key={copy} sx={{ display: 'inline-flex', flexShrink: 0 }}>
            {phrases.map((index) => (
              <Box
                key={index}
                component="span"
                sx={{
                  px: { xs: 2, md: 3 },
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                {text}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MarqueeStrip;
