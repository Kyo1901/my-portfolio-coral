import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';

/**
 * HeroSection 컴포넌트
 * Home 페이지 최상단 히어로 섹션 (메인 비주얼 영역)
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 8, md: 14 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: colors.onPrimary,
            mb: 2,
          }}
        >
          Hero
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.6,
            color: colors.onPrimary,
            opacity: 0.85,
          }}
        >
          여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
