import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';

const CARD_WIDTH_PERCENT = 72;
const CARD_HEIGHT_PX = 300;
const CARD_STEP_PX = 90;

/**
 * HeroProjectStack 컴포넌트
 * Hero 오른쪽에 프로젝트 썸네일 카드를 살짝 겹치고 기울여 쌓아 보여준다 (카드를 누르면 Live Demo 가 새 탭으로 열림)
 * 썸네일은 projects 테이블의 thumbnail_url(thum.io)을 그대로 사용한다
 *
 * Props:
 * @param {array} projects - 프로젝트 배열 [{ id, title, detail_url, thumbnail_url }] [Required]
 *
 * Example usage:
 * <HeroProjectStack projects={ projects.slice(0, 3) } />
 */
function HeroProjectStack({ projects }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: CARD_HEIGHT_PX + CARD_STEP_PX * (projects.length - 1),
      }}
    >
      {projects.map((project, index) => (
        <Box
          key={project.id}
          component="a"
          href={project.detail_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} Live Demo 열기`}
          sx={{
            position: 'absolute',
            top: CARD_STEP_PX * index,
            left: index % 2 === 0 ? 0 : `${100 - CARD_WIDTH_PERCENT}%`,
            zIndex: index + 1,
            width: `${CARD_WIDTH_PERCENT}%`,
            display: 'block',
            overflow: 'hidden',
            borderRadius: 3,
            textDecoration: 'none',
            backgroundColor: colors.surfaceContainer,
            border: `1px solid ${colors.outlineVariant}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            transform: `rotate(${index % 2 === 0 ? -3 : 2}deg)`,
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            '&:hover, &:focus-visible': {
              transform: 'rotate(0deg) translateY(-6px)',
              boxShadow: '0 14px 32px rgba(0,0,0,0.22)',
              zIndex: projects.length + 1,
            },
            '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
          }}
        >
          <Box
            component="img"
            src={project.thumbnail_url}
            alt=""
            loading="lazy"
            sx={{
              display: 'block',
              width: '100%',
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              objectPosition: 'top',
              backgroundColor: colors.surfaceContainerHighest,
            }}
          />
          <Typography
            sx={{
              px: 2,
              py: 1,
              fontWeight: 700,
              fontSize: '0.95rem',
              color: colors.onSurface,
            }}
          >
            {project.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default HeroProjectStack;
