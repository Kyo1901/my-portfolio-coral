import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SkillIcon from './skill-icon.jsx';
import { colors } from '../../theme.js';

/**
 * SkillItem 컴포넌트
 * 아이콘 + 기술명 + 숙련도 퍼센트 바 한 줄. 호버(터치 시 길게 누름) 하면 설명 툴팁 표시
 * 프로그레스 바는 화면에 나타날 때 0% → 숙련도까지 채워진다 (모션 감소 설정 시 애니메이션 없음)
 *
 * Props:
 * @param {object} skill - 스킬 데이터 { icon, name, level, description } [Required]
 * @param {string} color - 카테고리 색상 (CSS 색상 값) [Required]
 *
 * Example usage:
 * <SkillItem skill={ skill } color="var(--md-primary)" />
 */
function SkillItem({ skill, color }) {
  const { icon, name, level, description } = skill;

  return (
    <Tooltip title={description} arrow placement="top" enterTouchDelay={200}>
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: colors.surfaceContainer,
          border: `1px solid ${colors.outlineVariant}`,
          transition: 'transform 0.2s ease',
          '&:hover': { transform: 'translateY(-2px)' },
          '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <SkillIcon icon={icon} sx={{ color, fontSize: 28 }} />
          <Typography sx={{ flex: 1, fontWeight: 600, color: colors.onSurface }}>
            {name}
          </Typography>
          <Typography sx={{ fontWeight: 700, color }}>
            {level}%
          </Typography>
        </Box>
        <Box
          role="progressbar"
          aria-label={`${name} 숙련도`}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          sx={{
            height: 8,
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: colors.surfaceContainerHighest,
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${level}%`,
              borderRadius: 4,
              backgroundColor: color,
              animation: 'skillBarFill 0.9s ease-out',
              '@keyframes skillBarFill': {
                from: { width: 0 },
                to: { width: `${level}%` },
              },
              '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
            }}
          />
        </Box>
      </Box>
    </Tooltip>
  );
}

export default React.memo(SkillItem);
