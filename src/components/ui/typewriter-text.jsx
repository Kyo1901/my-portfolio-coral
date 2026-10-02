import * as React from 'react';
import Box from '@mui/material/Box';
import useTypewriter from '../../hooks/use-typewriter.js';

/**
 * TypewriterText 컴포넌트
 * 문자열을 타이핑 효과로 보여준다. 전체 문장을 보이지 않게 먼저 배치해 타이핑 중에도 레이아웃이 흔들리지 않는다
 * 스크린 리더에는 전체 문장이 그대로 읽히고, 타이핑이 끝나면 커서가 사라진다
 *
 * Props:
 * @param {string} text - 타이핑할 문자열 [Required]
 * @param {number} speed - 한 글자당 시간(ms) [Optional, 기본값: 70]
 * @param {number} startDelay - 시작 전 대기 시간(ms) [Optional, 기본값: 0]
 *
 * Example usage:
 * <TypewriterText text="Figma에서 React까지," startDelay={ 400 } />
 */
function TypewriterText({ text, speed = 70, startDelay = 0 }) {
  const { typed, isDone } = useTypewriter(text, speed, startDelay);

  return (
    <Box component="span" aria-label={text} sx={{ position: 'relative', display: 'inline-block' }}>
      <Box component="span" aria-hidden="true" sx={{ visibility: 'hidden' }}>
        {text}
      </Box>
      <Box component="span" aria-hidden="true" sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        {typed}
        {!isDone && (
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: '0.08em',
              height: '0.9em',
              ml: '0.04em',
              verticalAlign: 'baseline',
              backgroundColor: 'currentColor',
              animation: 'typewriterCaretBlink 0.8s steps(1) infinite',
              '@keyframes typewriterCaretBlink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0 },
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default TypewriterText;
