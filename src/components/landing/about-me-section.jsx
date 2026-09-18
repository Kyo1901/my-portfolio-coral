import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { colors } from '../../theme.js';

/**
 * AboutMeSection 컴포넌트
 * Home 페이지 내 About Me 소개 섹션
 *
 * Example usage:
 * <AboutMeSection />
 */
function AboutMeSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: colors.surface,
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Card
          elevation={0}
          sx={{
            backgroundColor: colors.surfaceContainer,
            border: `1px solid ${colors.outlineVariant}`,
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: colors.onSurface,
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                color: colors.onSurfaceVariant,
                mb: 3,
              }}
            >
              여기는 About Me 섹션입니다. 간단한 자기소개와 &apos;더 알아보기&apos; 버튼이 들어갈 예정입니다.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: colors.tertiary,
                color: colors.onTertiary,
                '&:hover': {
                  backgroundColor: colors.tertiaryHover,
                },
              }}
            >
              더 알아보기
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMeSection;
