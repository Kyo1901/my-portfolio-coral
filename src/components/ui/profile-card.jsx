import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import { colors } from '../../theme.js';

/**
 * ProfileCard 컴포넌트
 * About Me 상단 기본 정보 카드 (프로필 사진, 이름, 한 줄 소개, 학력/전공/경력)
 *
 * Props:
 * @param {object} basicInfo - 기본 정보 { name, tagline, education, major, experience, photo } [Required]
 *
 * Example usage:
 * <ProfileCard basicInfo={ aboutMeData.basicInfo } />
 */
function ProfileCard({ basicInfo }) {
  const { name, tagline, education, major, experience, photo } = basicInfo;

  const infoItems = [
    { label: '학력', value: education, icon: <SchoolIcon fontSize="small" /> },
    { label: '전공', value: major, icon: <CodeIcon fontSize="small" /> },
    { label: '경력', value: experience, icon: <WorkOutlinedIcon fontSize="small" /> },
  ];

  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: colors.surfaceContainer,
        border: `1px solid ${colors.outlineVariant}`,
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={photo || undefined}
              alt={`${name} 프로필 사진`}
              sx={{
                width: { xs: 140, md: 180 },
                height: { xs: 140, md: 180 },
                backgroundColor: colors.primaryContainer,
                color: colors.onPrimaryContainer,
              }}
            >
              <PersonIcon sx={{ fontSize: { xs: 84, md: 108 } }} />
            </Avatar>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: colors.onSurface,
                mb: 1,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                color: colors.onSurfaceVariant,
                mb: 3,
              }}
            >
              {tagline}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1,
              }}
            >
              {infoItems.map((item) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={`${item.label} · ${item.value}`}
                  sx={{
                    backgroundColor: colors.primaryContainer,
                    color: colors.onPrimaryContainer,
                    fontWeight: 600,
                    '& .MuiChip-icon': { color: colors.onPrimaryContainer },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
