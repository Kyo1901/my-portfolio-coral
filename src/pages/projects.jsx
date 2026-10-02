import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import ProjectCard from '../components/ui/project-card.jsx';
import useProjects from '../hooks/use-projects.js';
import { colors } from '../theme.js';

/**
 * Projects 페이지
 * Supabase projects 테이블의 게시된 프로젝트를 3열(태블릿 2열, 모바일 1열) 카드 그리드로 표시
 *
 * Example usage:
 * <Projects />
 */
function Projects() {
  const { projects, isLoading, error } = useProjects();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            color: colors.onSurface,
            textAlign: 'center',
            mb: 1,
          }}
        >
          Projects
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: colors.onSurfaceVariant,
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          직접 기획하고 개발해 배포한 프로젝트들입니다.
        </Typography>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress sx={{ color: colors.tertiary }} />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {!isLoading && !error && projects.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: colors.outline, py: 6 }}>
            아직 등록된 프로젝트가 없습니다.
          </Typography>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {projects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
