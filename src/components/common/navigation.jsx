import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { colors } from '../../theme.js';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * Navigation 컴포넌트
 * Home, About Me, Projects 3개 탭으로 구성된 상단 내비게이션 바
 *
 * Example usage:
 * <Navigation />
 */
function Navigation() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: colors.surfaceContainer,
        borderBottom: `1px solid ${colors.outlineVariant}`,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: { xs: 'center', md: 'flex-end' },
          gap: { xs: 1, md: 4 },
          py: 1,
          px: { md: 4 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            position: { xs: 'static', md: 'absolute' },
            left: { md: 24 },
            color: colors.onSurface,
            fontWeight: 700,
            mr: { xs: 2, md: 0 },
          }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 2 } }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.to === '/'}
              sx={{
                color: colors.onSurfaceVariant,
                fontWeight: 500,
                px: { xs: 1.5, md: 2 },
                borderRadius: 0,
                borderBottom: '3px solid transparent',
                '&.active': {
                  color: colors.onTertiaryContainer,
                  fontWeight: 700,
                  backgroundColor: colors.tertiaryContainer,
                  borderBottom: `3px solid ${colors.tertiary}`,
                },
                '&:hover': {
                  backgroundColor: colors.surfaceContainerHigh,
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
