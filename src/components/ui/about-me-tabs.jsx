import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';

/**
 * AboutMeTabs 컴포넌트
 * 콘텐츠 섹션을 탭으로 전환하며 보여준다
 * 항목형 콘텐츠는 카드 그리드로 표시하고, layout 이 'stack' 이면 카드 없이 소제목 + 본문을 구분선으로 나열한다
 *
 * Props:
 * @param {array} sections - 콘텐츠 섹션 배열 [{ id, title, subtitle, content, items, showInHome }] [Required]
 *
 * Example usage:
 * <AboutMeTabs sections={ aboutMeData.sections } />
 */
function AboutMeTabs({ sections }) {
  const [activeId, setActiveId] = React.useState(sections[0].id);

  const activeSection = sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <Box>
      <Tabs
        value={activeSection.id}
        onChange={(_event, nextId) => setActiveId(nextId)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="About Me 콘텐츠 탭"
        sx={{
          borderBottom: `1px solid ${colors.outlineVariant}`,
          mb: { xs: 3, md: 4 },
          '& .MuiTabs-indicator': { backgroundColor: colors.primary, height: 3 },
          '& .MuiTab-root': {
            color: colors.onSurfaceVariant,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            fontWeight: 500,
            '&.Mui-selected': { color: colors.primary, fontWeight: 700 },
          },
        }}
      >
        {sections.map((section) => (
          <Tab
            key={section.id}
            value={section.id}
            label={section.title}
            id={`about-tab-${section.id}`}
            aria-controls={`about-panel-${section.id}`}
          />
        ))}
      </Tabs>

      <Box
        key={activeSection.id}
        role="tabpanel"
        id={`about-panel-${activeSection.id}`}
        aria-labelledby={`about-tab-${activeSection.id}`}
        sx={{
          animation: 'aboutFadeIn 0.4s ease-out',
          '@keyframes aboutFadeIn': {
            from: { opacity: 0, transform: 'translateY(8px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            lineHeight: 1.3,
            color: colors.onSurface,
            mb: 1,
          }}
        >
          {activeSection.subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.15rem' },
            lineHeight: 1.8,
            whiteSpace: 'pre-line',
            color: colors.onSurfaceVariant,
            mb: activeSection.items.length > 0 ? 3 : 0,
          }}
        >
          {activeSection.content}
        </Typography>

        {activeSection.items.length > 0 && activeSection.layout === 'stack' && (
          <Box>
            {activeSection.items.map((item) => (
              <Box key={item.title}>
                <Divider sx={{ borderColor: colors.outlineVariant }} />
                <Box sx={{ py: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      fontWeight: 700,
                      color: colors.primary,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                      whiteSpace: 'pre-line',
                      color: colors.onSurfaceVariant,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
            <Divider sx={{ borderColor: colors.outlineVariant }} />
          </Box>
        )}

        {activeSection.items.length > 0 && activeSection.layout !== 'stack' && (
          <Grid container spacing={2}>
            {activeSection.items.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 12 / activeSection.items.length }}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    backgroundColor: colors.surfaceContainer,
                    border: `1px solid ${colors.outlineVariant}`,
                    borderRadius: 3,
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ lineHeight: 1.8, whiteSpace: 'pre-line', color: colors.onSurfaceVariant }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default AboutMeTabs;
