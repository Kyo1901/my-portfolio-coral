import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ProfileCard from '../components/ui/profile-card.jsx';
import AboutMeTabs from '../components/ui/about-me-tabs.jsx';
import SkillSection from '../components/ui/skill-section.jsx';
import usePortfolio from '../hooks/use-portfolio.js';
import { colors } from '../theme.js';

/**
 * AboutMe 페이지
 * 상단에 기본 정보 카드, 중단에 콘텐츠 섹션 탭, 하단에 스킬 섹션으로 구성 (데이터는 PortfolioContext 에서 가져와 홈 탭과 공유)
 *
 * Example usage:
 * <AboutMe />
 */
function AboutMe() {
  const { aboutMeData: data } = usePortfolio();

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
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
        <ProfileCard basicInfo={data.basicInfo} />
        <AboutMeTabs sections={data.sections} />
        <Divider sx={{ borderColor: colors.outlineVariant, borderBottomWidth: 2 }} />
        <SkillSection skills={data.skills} />
      </Container>
    </Box>
  );
}

export default AboutMe;
