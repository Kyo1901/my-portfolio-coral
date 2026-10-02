import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import usePortfolio from '../../hooks/use-portfolio.js';
import { colors } from '../../theme.js';

const HOME_CONTENT_IDS = ['dev-story', 'philosophy'];

/**
 * AboutMeSection 컴포넌트
 * Home 페이지 내 About Me 소개 섹션
 * PortfolioContext 의 홈 탭용 데이터(showInHome 섹션 요약, 기본 정보)를 표시한다
 * 왼쪽: 프로필 + 기본 정보 / 오른쪽: 개발 스토리(위) + 개발 철학(아래) 간략 요약(homeSummary) / 버튼: About Me 이동
 * 모바일에서는 프로필 → 개발 스토리 → 개발 철학 순으로 세로 배치된다
 *
 * Example usage:
 * <AboutMeSection />
 */
function AboutMeSection() {
  const { getHomeData } = usePortfolio();
  const { basicInfo, content } = getHomeData();
  const contentBlocks = HOME_CONTENT_IDS
    .map((id) => content.find((item) => item.id === id))
    .filter(Boolean);

  const infoRows = [
    { label: '학력', value: basicInfo.education },
    { label: '전공', value: basicInfo.major },
    { label: '경력', value: basicInfo.experience },
  ];

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
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: colors.onSurface,
            textAlign: 'center',
            mb: { xs: 3, md: 5 },
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: colors.surfaceContainer,
                border: `1px solid ${colors.outlineVariant}`,
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3 }}>
                <Avatar
                  src={basicInfo.photo || undefined}
                  alt={`${basicInfo.name} 프로필 사진`}
                  sx={{ width: 96, height: 96, backgroundColor: colors.primaryContainer, color: colors.onPrimaryContainer }}
                >
                  <PersonIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography sx={{ fontSize: '1.3rem', fontWeight: 700, color: colors.onSurface }}>
                  {basicInfo.name}
                </Typography>
                <Box component="dl" sx={{ width: '100%', m: 0 }}>
                  {infoRows.map((row) => (
                    <Box
                      key={row.label}
                      sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, py: 0.75, fontSize: '0.9rem' }}
                    >
                      <Box component="dt" sx={{ color: colors.outline }}>{row.label}</Box>
                      <Box component="dd" sx={{ m: 0, textAlign: 'right', color: colors.onSurface }}>{row.value}</Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 } }}>
            {contentBlocks.map((block) => (
              <Box key={block.id}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 700, color: colors.primary, mb: 1.5 }}
                >
                  {block.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    lineHeight: 1.8,
                    color: colors.onSurfaceVariant,
                  }}
                >
                  {block.summary}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 5 } }}>
          <Button
            component={RouterLink}
            to="/about"
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
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMeSection;
