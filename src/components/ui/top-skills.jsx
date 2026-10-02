import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SkillIcon from './skill-icon.jsx';
import { colors } from '../../theme.js';

/**
 * TopSkills 컴포넌트
 * 홈 탭용 간단한 스킬 목록 (아이콘 + 기술명). 숙련도 순으로 정렬된 상위 스킬을 그대로 받아 표시한다
 *
 * Props:
 * @param {array} skills - 표시할 스킬 배열 [{ id, icon, name }] [Required]
 * @param {string} color - 아이콘/글자 색상 (CSS 색상 값) [Optional, 기본값: colors.primary]
 *
 * Example usage:
 * <TopSkills skills={ homeData.skills } color={ colors.onPrimaryContainer } />
 */
function TopSkills({ skills, color = colors.primary }) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 2, md: 4 },
        listStyle: 'none',
        m: 0,
        p: 0,
      }}
    >
      {skills.map((skill) => (
        <Box
          component="li"
          key={skill.id}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5, minWidth: 72 }}
        >
          <SkillIcon icon={skill.icon} sx={{ color, fontSize: { xs: 36, md: 44 } }} />
          <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color }}>
            {skill.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default React.memo(TopSkills);
