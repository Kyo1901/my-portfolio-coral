import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TopSkills from '../ui/top-skills.jsx';
import usePortfolio from '../../hooks/use-portfolio.js';
import { colors } from '../../theme.js';

/**
 * SkillTreeSection 컴포넌트
 * Home 페이지 내 기술 스택(Skill Tree) 소개 섹션
 * PortfolioContext 의 홈 탭용 데이터 중 숙련도 상위 스킬을 아이콘 + 이름으로 표시한다
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  const { getHomeData } = usePortfolio();
  const { skills } = getHomeData();

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
            mb: 4,
          }}
        >
          가장 자신 있는 기술입니다.
        </Typography>
        <Box sx={{ mb: 4 }}>
          <TopSkills skills={skills} color={colors.onPrimaryContainer} />
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
