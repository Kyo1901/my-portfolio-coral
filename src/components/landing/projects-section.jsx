import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from '../ui/project-card.jsx';
import useProjects from '../../hooks/use-projects.js';
import { colors } from '../../theme.js';

const HOME_PROJECT_COUNT = 3;

/**
 * ProjectsSection 컴포넌트
 * Home 페이지 내 대표 프로젝트 섹션
 * Projects 탭과 같은 데이터(Supabase projects 테이블)·같은 카드로 앞쪽 N개를 보여주고, 버튼으로 Projects 탭으로 이동한다
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  const { projects, isLoading, error } = useProjects(HOME_PROJECT_COUNT);

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
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: colors.onSurface,
            mb: 2,
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: colors.onSurfaceVariant,
            mb: 4,
          }}
        >
          직접 기획하고 개발해 배포한 대표 프로젝트입니다.
        </Typography>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress sx={{ color: colors.tertiary }} />
          </Box>
        )}

        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}

        {!isLoading && !error && projects.length === 0 && (
          <Typography sx={{ color: colors.outline, py: 4 }}>
            아직 등록된 프로젝트가 없습니다.
          </Typography>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 4, justifyContent: 'center' }}>
            {projects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}

        <Button
          component={RouterLink}
          to="/projects"
          variant="contained"
          sx={{
            backgroundColor: colors.tertiary,
            color: colors.onTertiary,
            '&:hover': {
              backgroundColor: colors.tertiaryHover,
            },
          }}
        >
          프로젝트 전체 보기
        </Button>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
