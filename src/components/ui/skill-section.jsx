import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SkillItem from './skill-item.jsx';
import SkillLevelGuide from './skill-level-guide.jsx';
import useProjects from '../../hooks/use-projects.js';
import { colors } from '../../theme.js';
import { CATEGORY_COLORS, DEFAULT_CATEGORY_COLOR, groupSkillsByCategory } from '../../utils/skill-utils.js';

/**
 * SkillSection 컴포넌트
 * 숙련도 기준 범례 + 스킬을 카테고리별로 묶어 3열(태블릿 2열, 모바일 1열) 그리드로 보여준다 (카테고리마다 색상 구분)
 * 스킬에 연결된 프로젝트는 projects 테이블(Supabase)의 배포 URL 로 링크된다
 *
 * Props:
 * @param {array} skills - 스킬 배열 [{ id, icon, name, level, category, description }] [Required]
 *
 * Example usage:
 * <SkillSection skills={ skillsData } />
 */
function SkillSection({ skills }) {
  const groups = groupSkillsByCategory(skills);
  const { projects } = useProjects();
  const projectUrls = React.useMemo(
    () => Object.fromEntries(projects.map((project) => [project.title, project.detail_url])),
    [projects],
  );

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

      <SkillLevelGuide />

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
                    <SkillItem skill={skill} color={color} projectUrls={projectUrls} />
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
