import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/black-han-sans/400.css';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import HeroBackground from '../ui/hero-background.jsx';
import HeroProjectStack from '../ui/hero-project-stack.jsx';
import HeroScrollIndicator from '../ui/hero-scroll-indicator.jsx';
import MarqueeStrip from '../ui/marquee-strip.jsx';
import TypewriterText from '../ui/typewriter-text.jsx';
import usePortfolio from '../../hooks/use-portfolio.js';
import useProjects from '../../hooks/use-projects.js';
import { colors } from '../../theme.js';
import { GITHUB_URL } from '../../utils/contact-data.js';

const MARQUEE_TEXT = 'DESIGN · FRONT-END · REACT · SUPABASE';
const HERO_ROLE = '신입 UI/UX 디자이너 & 프론트엔드';
const HERO_FONT_FAMILY = '"Pretendard Variable", "Pretendard", "Roboto", "Helvetica", "Arial", sans-serif';
const HEADLINE_FONT_FAMILY = '"Black Han Sans", "Pretendard Variable", "Roboto", sans-serif';
const HEADLINE_HIGHLIGHT = 'Figma에서 React까지,';
const HEADLINE_REST = '설계하고 구현합니다.';
const HERO_STACK_COUNT = 3;
const EVIDENCE_CHIPS = ['React', 'Supabase', 'GitHub Actions 자동 배포'];

const BUTTON_HOVER_SX = {
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
  '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 6px 16px rgba(0,0,0,0.18)' },
  '&:active': { transform: 'translateY(0)' },
  '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
};

/**
 * 요소로 부드럽게 스크롤한다 (모션 감소 설정이면 즉시 이동)
 * @param {Element} element - 이동할 요소 (없으면 아무 일도 하지 않음)
 */
function scrollToElement(element) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  element?.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth' });
}

/**
 * 요소가 아래에서 위로 부드럽게 나타나는 애니메이션 스타일을 만든다 (delay 만큼 늦게 시작, 모션 감소 설정이면 없음)
 * @param {number} delay - 시작 지연 시간(ms)
 * @returns {object} sx 스타일 객체
 */
function fadeUp(delay) {
  return {
    animation: `heroFadeUp 0.7s ease-out ${delay}ms both`,
    '@keyframes heroFadeUp': {
      from: { opacity: 0, transform: 'translateY(24px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
  };
}

/**
 * HeroSection 컴포넌트
 * Home 페이지 최상단 히어로 섹션 (섹션 전체에 Pretendard, 헤드라인에 Black Han Sans 적용)
 * 배경: 그라데이션 + 점 그리드 + 떠다니는 도형(HeroBackground)
 * 왼쪽: 이름·포지션 라벨 → 타이핑 헤드라인 → 서브 카피 → 증거 칩 → CTA(프로젝트 보기, 연락하기(Contact 섹션으로 스크롤), GitHub), 순서대로 페이드인
 * 오른쪽(md 이상): 프로젝트 썸네일 카드 묶음 / 하단: 스크롤 유도 화살표 + 마퀴 띠
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
  const heroRef = React.useRef(null);

  const scrollToNextSection = React.useCallback(() => {
    scrollToElement(heroRef.current?.nextElementSibling);
  }, []);

  const scrollToContact = React.useCallback(() => {
    scrollToElement(document.getElementById('contact'));
  }, []);

  return (
    <Box
      ref={heroRef}
      component="section"
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.surface,
        fontFamily: HERO_FONT_FAMILY,
        '& .MuiTypography-root:not(.hero-headline), & .MuiButton-root, & .MuiChip-root': { fontFamily: HERO_FONT_FAMILY },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          px: { xs: 2, md: 3 },
        }}
      >
        <HeroBackground />

        <Container maxWidth="lg" disableGutters sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 0, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }} sx={{ containerType: 'inline-size' }}>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '1rem' },
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: colors.primary,
                  mb: { xs: 2, md: 3 },
                  ...fadeUp(0),
                }}
              >
                {basicInfo.name} · {HERO_ROLE}
              </Typography>

              <Typography
                variant="h1"
                className="hero-headline"
                aria-label={`${HEADLINE_HIGHLIGHT} ${HEADLINE_REST}`}
                sx={{
                  fontFamily: HEADLINE_FONT_FAMILY,
                  fontSize: { xs: 'clamp(2.25rem, 5.6vw, 4.25rem)', md: 'clamp(2rem, 7.2cqw, 4.25rem)' },
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  color: colors.onSurface,
                  mb: { xs: 3, md: 4 },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    whiteSpace: { md: 'nowrap' },
                    px: 1.5,
                    mb: 0.5,
                    borderRadius: 2,
                    backgroundColor: 'var(--md-tertiary-container)',
                    color: 'var(--md-on-tertiary-container)',
                  }}
                >
                  <TypewriterText text={HEADLINE_HIGHLIGHT} startDelay={500} />
                </Box>
                <Box component="span" sx={{ display: 'block', ...fadeUp(1500) }}>
                  {HEADLINE_REST}
                </Box>
              </Typography>

              <Typography
                sx={{
                  maxWidth: 560,
                  fontSize: { xs: '1.05rem', md: '1.3rem' },
                  lineHeight: 1.7,
                  color: colors.onSurfaceVariant,
                  mb: { xs: 3, md: 4 },
                  ...fadeUp(1700),
                }}
              >
                React · Supabase로 SNS와 커뮤니티를 직접 만들어 배포했습니다.
              </Typography>

              <Box
                component="ul"
                aria-label="핵심 기술과 배포 현황"
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  listStyle: 'none',
                  m: 0,
                  mb: { xs: 4, md: 5 },
                  p: 0,
                  ...fadeUp(1900),
                }}
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
                      sx={{
                        color: colors.onSurfaceVariant,
                        borderColor: colors.outline,
                        fontWeight: 600,
                        backgroundColor: colors.surface,
                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                        '&:hover': { transform: 'translateY(-2px)', backgroundColor: colors.primaryContainer },
                        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, ...fadeUp(2100) }}>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    ...BUTTON_HOVER_SX,
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    '&:hover': { ...BUTTON_HOVER_SX['&:hover'], backgroundColor: colors.primary, filter: 'brightness(1.1)' },
                  }}
                >
                  프로젝트 보기
                </Button>
                <Button
                  onClick={scrollToContact}
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  sx={{
                    ...BUTTON_HOVER_SX,
                    color: colors.primary,
                    borderColor: colors.primary,
                    borderWidth: 2,
                    backgroundColor: colors.surface,
                    '&:hover': {
                      ...BUTTON_HOVER_SX['&:hover'],
                      borderColor: colors.primary,
                      borderWidth: 2,
                      backgroundColor: colors.primaryContainer,
                    },
                  }}
                >
                  연락하기
                </Button>
                <Tooltip title="GitHub 열기" arrow>
                  <IconButton
                    component="a"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub 열기"
                    sx={{
                      ...BUTTON_HOVER_SX,
                      width: 48,
                      height: 48,
                      color: colors.primary,
                      border: `2px solid ${colors.primary}`,
                      backgroundColor: colors.surface,
                      '&:hover': { ...BUTTON_HOVER_SX['&:hover'], backgroundColor: colors.primaryContainer },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' }, ...fadeUp(900) }}>
              <HeroProjectStack projects={projects.slice(0, HERO_STACK_COUNT)} />
            </Grid>
          </Grid>
        </Container>

        <HeroScrollIndicator onClick={scrollToNextSection} />
      </Box>

      <MarqueeStrip text={MARQUEE_TEXT} />
    </Box>
  );
}

export default HeroSection;
