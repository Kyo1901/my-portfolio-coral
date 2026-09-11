import * as React from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section.jsx';
import AboutMeSection from '../components/landing/about-me-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';

/**
 * Home 페이지
 * Hero, About Me, Skill Tree, Projects, Contact 5개 섹션으로 구성
 *
 * Example usage:
 * <Home />
 */
function Home() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default Home;
