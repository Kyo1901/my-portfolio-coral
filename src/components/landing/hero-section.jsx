import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '@fontsource/pretendard/700.css';
import '@fontsource/pretendard/800.css';
import HeroProjectStack from '../ui/hero-project-stack.jsx';
import MarqueeStrip from '../ui/marquee-strip.jsx';
import usePortfolio from '../../hooks/use-portfolio.js';
import useProjects from '../../hooks/use-projects.js';
import { colors } from '../../theme.js';

const MARQUEE_TEXT = 'UI/UX DESIGN · PLANNING · FRONT-END · AI';
const HERO_ROLE = '신입 UI/UX 디자이너 & 프론트엔드';
const HERO_STACK_COUNT = 3;
const EVIDENCE_CHIPS = ['React', 'Supabase', 'GitHub Actions 자동 배포'];

/**
 * 연락하기 버튼 클릭 시 Contact 섹션(id="contact")으로 부드럽게 스크롤한다 (모션 감소 설정이면 즉시 이동)
 */
function scrollToContact() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.getElementById('contact')?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
}

/**
 * HeroSection 컴포넌트
 * Home 페이지 최상단 히어로 섹션
 * 왼쪽: 이름·포지션 라벨 + 헤드라인 + 서브 카피 + 증거 칩(배포 프로젝트 수, 기술) + CTA 2개
 * 오른쪽(md 이상): 프로젝트 썸네일 카드 묶음 / 하단: 마퀴 띠
 * 이름은 PortfolioContext, 프로젝트 수와 썸네일은 Supabase projects 테이블에서 가져온다
 * 포트폴리오 기획서.md 2장, Hero 섹션 개선안.md 기반
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  const { getHomeData } = usePortfolio();
  const { basicInfo } = getHomeData();
  const { projects } = useProjects();

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.surface,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Grid container spacing={{ xs: 0, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                sx={{
                  fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: colors.primary,
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                {basicInfo.name} · {HERO_ROLE}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: colors.onSurface,
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    px: 1,
                    borderRadius: 1,
                    backgroundColor: 'var(--md-tertiary-container)',
                    color: 'var(--md-on-tertiary-container)',
                  }}
                >
                  Figma에서 React까지,
                </Box>
                {' '}
                설계하고 구현합니다.
              </Typography>

              <Typography
                sx={{
                  maxWidth: 640,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  lineHeight: 1.7,
                  color: colors.onSurfaceVariant,
                  mb: { xs: 3, md: 4 },
                }}
              >
                React · Supabase로 SNS와 커뮤니티를 직접 만들어 배포했습니다.
              </Typography>

              <Box
                component="ul"
                aria-label="핵심 기술과 배포 현황"
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, listStyle: 'none', m: 0, mb: { xs: 4, md: 5 }, p: 0 }}
              >
                {projects.length > 0 && (
                  <Box component="li">
                    <Chip
                      label={`프로젝트 ${projects.length}개 배포`}
                      sx={{ backgroundColor: colors.primaryContainer, color: colors.onPrimaryContainer, fontWeight: 700 }}
                    />
                  </Box>
                )}
                {EVIDENCE_CHIPS.map((chip) => (
                  <Box component="li" key={chip}>
                    <Chip
                      variant="outlined"
                      label={chip}
                      sx={{ color: colors.onSurfaceVariant, borderColor: colors.outline, fontWeight: 600 }}
                    />
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    '&:hover': { backgroundColor: colors.primary, filter: 'brightness(1.1)' },
                  }}
                >
                  프로젝트 보기
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToContact}
                  sx={{
                    backgroundColor: 'var(--md-secondary-container)',
                    color: 'var(--md-on-secondary-container)',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'var(--md-secondary-container)',
                      filter: 'brightness(0.95)',
                      boxShadow: 'none',
                    },
                  }}
                >
                  연락하기
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeroProjectStack projects={projects.slice(0, HERO_STACK_COUNT)} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <MarqueeStrip text={MARQUEE_TEXT} />
    </Box>
  );
}

export default HeroSection;
