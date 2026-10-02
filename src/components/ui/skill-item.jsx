import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SkillIcon from './skill-icon.jsx';
import useInView from '../../hooks/use-in-view.js';
import { colors } from '../../theme.js';
import { getSkillLevelInfo } from '../../utils/skill-utils.js';

/**
 * SkillItem 컴포넌트
 * 아이콘 + 기술명 + 숙련도 퍼센트 바 + 숙련도 구간 이름 + 사용한 프로젝트 칩. 호버(터치 시 길게 누름) 하면 설명 툴팁 표시
 * 프로그레스 바는 카드가 화면에 처음 보일 때 0% → 숙련도까지 한 번만 채워진다 (모션 감소 설정 시 애니메이션 없음)
 *
 * Props:
 * @param {object} skill - 스킬 데이터 { icon, name, level, description, projects } [Required]
 * @param {string} color - 카테고리 색상 (CSS 색상 값) [Required]
 * @param {object} projectUrls - 프로젝트 title → 배포 URL 매핑 [Optional, 기본값: {}]
 *
 * Example usage:
 * <SkillItem skill={ skill } color="var(--md-primary)" projectUrls={ { 'Novel Story': 'https://...' } } />
 */
function SkillItem({ skill, color, projectUrls = {} }) {
  const { icon, name, level, description, projects = [] } = skill;
  const [ref, isInView] = useInView();
  const levelInfo = getSkillLevelInfo(level);

  return (
    <Tooltip title={description} arrow placement="top" enterTouchDelay={200}>
      <Box
        ref={ref}
        sx={{
          height: '100%',
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
              width: isInView ? `${level}%` : 0,
              borderRadius: 4,
              backgroundColor: color,
              transition: 'width 0.9s ease-out',
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            }}
          />
        </Box>
        <Typography sx={{ mt: 1, fontSize: '0.8rem', color: colors.onSurfaceVariant }}>
          {levelInfo.name}
        </Typography>

        {projects.length > 0 && (
          <Box sx={{ mt: 1.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: colors.outline, mb: 0.5 }}>
              사용한 프로젝트
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {projects.map((title) => {
                const url = projectUrls[title];

                return (
                  <Chip
                    key={title}
                    size="small"
                    label={title}
                    {...(url && { component: 'a', href: url, target: '_blank', rel: 'noopener noreferrer', clickable: true })}
                    sx={{
                      backgroundColor: colors.primaryContainer,
                      color: colors.onPrimaryContainer,
                      fontWeight: 600,
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Tooltip>
  );
}

export default React.memo(SkillItem);
