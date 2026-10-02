import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { colors } from '../../theme.js';
import { SKILL_LEVEL_GUIDE } from '../../utils/skill-utils.js';

/**
 * SkillLevelGuide 컴포넌트
 * 숙련도 퍼센트가 무엇을 뜻하는지 구간별로 설명하는 범례
 *
 * Example usage:
 * <SkillLevelGuide />
 */
function SkillLevelGuide() {
  return (
    <Box
      sx={{
        mb: { xs: 4, md: 5 },
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        backgroundColor: colors.surfaceContainerHigh,
      }}
    >
      <Typography sx={{ fontWeight: 700, color: colors.onSurface, mb: 1.5 }}>
        숙련도 기준
      </Typography>
      <Box
        component="dl"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' },
          columnGap: 2,
          rowGap: { xs: 1.5, sm: 1 },
          m: 0,
        }}
      >
        {SKILL_LEVEL_GUIDE.map((guide) => (
          <React.Fragment key={guide.min}>
            <Box component="dt" sx={{ fontWeight: 600, color: colors.primary, whiteSpace: 'nowrap' }}>
              {guide.range} · {guide.name}
            </Box>
            <Box component="dd" sx={{ m: 0, color: colors.onSurfaceVariant, lineHeight: 1.6 }}>
              {guide.description}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}

export default SkillLevelGuide;
