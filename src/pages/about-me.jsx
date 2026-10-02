import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProfileCard from '../components/ui/profile-card.jsx';
import AboutMeTabs from '../components/ui/about-me-tabs.jsx';
import aboutMeData from '../utils/about-me-data.js';
import { colors } from '../theme.js';

/**
 * AboutMe 페이지
 * 상단에 기본 정보 카드, 하단에 콘텐츠 섹션 탭으로 구성 (데이터는 useState 로 관리)
 *
 * Example usage:
 * <AboutMe />
 */
function AboutMe() {
  const [data] = React.useState(aboutMeData);

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
      </Container>
    </Box>
  );
}

export default AboutMe;
