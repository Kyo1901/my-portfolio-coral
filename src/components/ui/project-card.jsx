import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from '../../theme.js';

/**
 * ProjectCard 컴포넌트
 * 프로젝트 썸네일(위) + 정보(아래) 카드. 호버 시 확대/그림자, 버튼 클릭 시 눌림 애니메이션
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 (title, description, tech_stack, detail_url, github_url, thumbnail_url, is_personal) [Required]
 *
 * Example usage:
 * <ProjectCard project={project} />
 */
function ProjectCard({ project }) {
  const { title, description, tech_stack: techStack, detail_url: detailUrl, github_url: githubUrl, thumbnail_url: thumbnailUrl, is_personal: isPersonal } = project;

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        backgroundColor: colors.surfaceContainer,
        border: `1px solid ${colors.outlineVariant}`,
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        },
        '&:active': {
          transform: 'scale(1.01)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={thumbnailUrl}
        alt={`${title} 스크린샷`}
        loading="lazy"
        sx={{
          aspectRatio: '4 / 3',
          objectFit: 'cover',
          objectPosition: 'top',
          backgroundColor: colors.surfaceContainerHighest,
        }}
      />
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, p: { xs: 2, md: 2.5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 700, color: colors.onSurface }}
          >
            {title}
          </Typography>
          <Chip
            size="small"
            label={isPersonal ? '개인' : '팀'}
            sx={{ backgroundColor: colors.primaryContainer, color: colors.onPrimaryContainer, fontWeight: 600 }}
          />
        </Box>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: colors.onSurfaceVariant }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              size="small"
              variant="outlined"
              label={tech}
              sx={{ color: colors.onSurfaceVariant, borderColor: colors.outline }}
            />
          ))}
        </Box>
        <Box sx={{ fontSize: '0.85rem', color: colors.outline }}>
          {techStack.join(' · ')}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 1 }}>
          <Button
            variant="contained"
            size="small"
            href={detailUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
            sx={{
              backgroundColor: colors.primary,
              color: colors.onPrimary,
              transition: 'transform 0.15s ease',
              '&:hover': { backgroundColor: colors.primary, filter: 'brightness(1.1)' },
              '&:active': { transform: 'scale(0.94)' },
            }}
          >
            Live Demo
          </Button>
          {githubUrl && (
            <Button
              variant="outlined"
              size="small"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{
                color: colors.onSurface,
                borderColor: colors.outline,
                transition: 'transform 0.15s ease',
                '&:active': { transform: 'scale(0.94)' },
              }}
            >
              GitHub
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
