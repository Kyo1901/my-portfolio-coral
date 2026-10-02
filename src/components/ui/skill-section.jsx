import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SkillItem from './skill-item.jsx';
import { colors } from '../../theme.js';
import { groupSkillsByCategory } from '../../utils/skill-utils.js';

const CATEGORY_COLORS = {
  Frontend: 'var(--md-primary)',
  Framework: 'var(--md-tertiary)',
  Design: 'var(--md-secondary)',
  Background: 'var(--md-on-surface-variant)',
  'Tool & etc': 'var(--md-outline)',
};
const DEFAULT_CATEGORY_COLOR = 'var(--md-primary)';

/**
 * SkillSection 컴포넌트
 * 스킬을 카테고리별로 묶어 3열(태블릿 2열, 모바일 1열) 그리드로 보여준다 (카테고리마다 색상 구분)
 *
 * Props:
 * @param {array} skills - 스킬 배열 [{ id, icon, name, level, category, description }] [Required]
 *
 * Example usage:
 * <SkillSection skills={ skillsData } />
 */
function SkillSection({ skills }) {
  const groups = groupSkillsByCategory(skills);

  return (
    <Box component="section" aria-label="스킬">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 700,
          lineHeight: 1.3,
          color: colors.onSurface,
          mb: { xs: 3, md: 4 },
        }}
      >
        Skills
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 } }}>
        {groups.map((group) => {
          const color = CATEGORY_COLORS[group.category] ?? DEFAULT_CATEGORY_COLOR;

          return (
            <Box key={group.category}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color }} />
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 700, color }}
                >
                  {group.category}
                </Typography>
              </Box>
              <Grid container spacing={2}>
                {group.skills.map((skill) => (
                  <Grid key={skill.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <SkillItem skill={skill} color={color} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SkillSection;
