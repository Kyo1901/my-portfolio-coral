import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../theme.js';

/**
 * AboutMe 페이지
 * 상세한 자기소개가 들어갈 페이지 (개발 예정 공간)
 *
 * Example usage:
 * <AboutMe />
 */
function AboutMe() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgSecondary,
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="md" sx={{ py: 4, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: colors.textPrimary,
            mb: 2,
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: colors.textSecondary,
          }}
        >
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMe;
