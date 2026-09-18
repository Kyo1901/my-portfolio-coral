import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';

/**
 * SkillTreeSection 컴포넌트
 * Home 페이지 내 기술 스택(Skill Tree) 소개 섹션
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
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
          }}
        >
          여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
