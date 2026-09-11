import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';

/**
 * ContactSection 컴포넌트
 * Home 페이지 최하단 연락처 섹션
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: colors.primary,
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: colors.textPrimary,
            mb: 2,
          }}
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: colors.primaryDark,
          }}
        >
          여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default ContactSection;
