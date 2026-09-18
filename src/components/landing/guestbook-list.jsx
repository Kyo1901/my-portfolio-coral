import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import formatDate from '../../utils/format-date.js';
import { colors } from '../../theme.js';

/**
 * GuestbookList 컴포넌트
 * 등록된 방명록 목록을 카드 형태로 나열 (이메일은 표시하지 않음)
 *
 * Props:
 * @param {array} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 목록 로딩 여부 [Optional, 기본값: false]
 * @param {string} error - 목록 조회 실패 시 에러 메시지 [Optional, 기본값: null]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} error={error} />
 */
function GuestbookList({ entries, isLoading = false, error = null }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
        <CircularProgress sx={{ color: colors.accent }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        {error}
      </Alert>
    );
  }

  if (entries.length === 0) {
    return (
      <Typography sx={{ textAlign: 'center', color: colors.textMuted, py: 6 }}>
        아직 등록된 방명록이 없습니다. 첫 번째 방명록을 남겨보세요!
      </Typography>
    );
  }

  return (
    <Grid container spacing={2}>
      {entries.map((entry) => (
        <Grid key={entry.id} size={{ xs: 12, md: 6 }}>
          <Card
            elevation={0}
            sx={{
              height: '100%',
              backgroundColor: colors.secondary,
              border: `1px solid ${colors.buttonHover}`,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: 700, color: colors.textPrimary }}>
                  {entry.name}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: colors.textMuted }}>
                  {formatDate(entry.created_at)}
                </Typography>
              </Box>
              {entry.rating && (
                <Rating value={entry.rating} readOnly size="small" sx={{ color: colors.accent, mb: 1 }} />
              )}
              <Typography sx={{ color: colors.textSecondary, lineHeight: 1.6 }}>
                {entry.message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GuestbookList;
