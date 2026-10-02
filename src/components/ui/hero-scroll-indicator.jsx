import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colors } from '../../theme.js';

/**
 * HeroScrollIndicator 컴포넌트
 * Hero 하단 중앙의 "아래로 스크롤" 화살표 버튼. 위아래로 천천히 움직이며 클릭하면 onClick 이 실행된다
 * 모션 감소 설정이면 움직이지 않는다
 *
 * Props:
 * @param {function} onClick - 클릭 시 실행할 함수 (다음 섹션으로 스크롤) [Required]
 *
 * Example usage:
 * <HeroScrollIndicator onClick={ scrollToNextSection } />
 */
function HeroScrollIndicator({ onClick }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        bottom: { xs: 12, md: 20 },
        transform: 'translateX(-50%)',
        zIndex: 1,
      }}
    >
      <IconButton
        onClick={onClick}
        aria-label="다음 섹션으로 스크롤"
        sx={{
          color: colors.primary,
          border: `2px solid ${colors.primary}`,
          backgroundColor: colors.surface,
          animation: 'heroScrollBounce 1.8s ease-in-out infinite',
          transition: 'background-color 0.2s ease',
          '&:hover': { backgroundColor: colors.primaryContainer },
          '@keyframes heroScrollBounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(8px)' },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  );
}

export default HeroScrollIndicator;
