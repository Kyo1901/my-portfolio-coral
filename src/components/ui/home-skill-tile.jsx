import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SkillIcon from './skill-icon.jsx';
import useInView from '../../hooks/use-in-view.js';
import { colors } from '../../theme.js';
import { CATEGORY_COLORS, DEFAULT_CATEGORY_COLOR } from '../../utils/skill-utils.js';

/**
 * HomeSkillTile 컴포넌트
 * 홈 탭 대표 스킬 카드 (카테고리 색상 점 + 아이콘 + 기술명 + 숙련도 퍼센트/바)
 * 숙련도 바는 카드가 화면에 처음 보일 때 한 번만 채워진다 (모션 감소 설정 시 애니메이션 없음)
 * 호버(터치 시 길게 누름) 하면 기술 설명 툴팁이 표시된다
 *
 * Props:
 * @param {object} skill - 스킬 데이터 { icon, name, level, category, description } [Required]
 *
 * Example usage:
 * <HomeSkillTile skill={ skill } />
 */
function HomeSkillTile({ skill }) {
  const { icon, name, level, category, description } = skill;
  const color = CATEGORY_COLORS[category] ?? DEFAULT_CATEGORY_COLOR;
  const [ref, isInView] = useInView();

  return (
    <Tooltip title={description} arrow placement="top" enterTouchDelay={200}>
      <Box
        ref={ref}
        sx={{
          width: { xs: 'calc(50% - 8px)', sm: 168 },
          p: 2,
          borderRadius: 3,
          textAlign: 'left',
          backgroundColor: colors.surface,
          border: `1px solid ${colors.outlineVariant}`,
          transition: 'transform 0.2s ease',
          '&:hover': { transform: 'translateY(-2px)' },
          '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <SkillIcon icon={icon} sx={{ color, fontSize: 36 }} />
          <Box
            title={category}
            aria-label={`${category} 카테고리`}
            sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 1 }}>
          <Typography sx={{ fontWeight: 700, color: colors.onSurface }}>{name}</Typography>
          <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color }}>{level}%</Typography>
        </Box>
        <Box
          role="progressbar"
          aria-label={`${name} 숙련도`}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          sx={{ height: 6, borderRadius: 3, overflow: 'hidden', backgroundColor: colors.surfaceContainerHighest }}
        >
          <Box
            sx={{
              height: '100%',
              width: isInView ? `${level}%` : 0,
              borderRadius: 3,
              backgroundColor: color,
              transition: 'width 0.9s ease-out',
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            }}
          />
        </Box>
      </Box>
    </Tooltip>
  );
}

export default React.memo(HomeSkillTile);
