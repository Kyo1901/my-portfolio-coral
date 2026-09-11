import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { colors } from '../../theme.js';

const PLACEHOLDER_THUMBNAILS = [1, 2, 3, 4];

/**
 * ProjectsSection 컴포넌트
 * Home 페이지 내 대표 프로젝트 썸네일 섹션
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        backgroundColor: colors.bgSecondary,
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
            color: colors.textPrimary,
            mb: 2,
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: colors.textSecondary,
            mb: 4,
          }}
        >
          여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 &apos;더 보기&apos; 버튼이 들어갈 예정입니다.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {PLACEHOLDER_THUMBNAILS.map((n) => (
            <Grid key={n} size={{ xs: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  aspectRatio: '1 / 1',
                  backgroundColor: colors.primaryLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  color: colors.textPrimary,
                }}
              >
                Project {n}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.accent,
            color: colors.secondary,
            '&:hover': {
              backgroundColor: colors.linkHover,
            },
          }}
        >
          더 보기
        </Button>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
