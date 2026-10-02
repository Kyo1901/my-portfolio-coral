import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeSkillTile from '../ui/home-skill-tile.jsx';
import usePortfolio from '../../hooks/use-portfolio.js';
import { colors } from '../../theme.js';

const SKILL_ROWS = [
  { id: 'designer', title: 'Part Designer', categories: ['Design'] },
  { id: 'coder', title: 'Part Coder', categories: ['Frontend', 'Framework'] },
];

/**
 * SkillTreeSection 컴포넌트
 * Home 페이지 내 기술 스택(Skill Tree) 소개 섹션
 * PortfolioContext 의 홈 탭용 데이터 중 대표(isMain) 스킬을 Part Designer / Part Coder 두 줄로 나눠 표시한다
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  const { getHomeData } = usePortfolio();
  const { skills } = getHomeData();

  const rows = SKILL_ROWS
    .map((row) => ({ ...row, skills: skills.filter((skill) => row.categories.includes(skill.category)) }))
    .filter((row) => row.skills.length > 0);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: colors.primaryContainer,
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: colors.onPrimaryContainer,
            mb: 2,
          }}
        >
          Skill Tree
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: colors.onPrimaryContainer,
            opacity: 0.85,
            mb: { xs: 4, md: 5 },
          }}
        >
          코드를 이해하는 디자이너가 가장 자주 쓰는 도구들입니다.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, mb: { xs: 4, md: 5 } }}>
          {rows.map((row) => (
            <Box key={row.id}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: colors.onPrimaryContainer,
                  mb: 1.5,
                }}
              >
                {row.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {row.skills.map((skill) => (
                  <HomeSkillTile key={skill.id} skill={skill} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Button
          component={RouterLink}
          to="/about"
          variant="contained"
          sx={{
            backgroundColor: colors.tertiary,
            color: colors.onTertiary,
            '&:hover': {
              backgroundColor: colors.tertiaryHover,
            },
          }}
        >
          전체 스킬 보기
        </Button>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
