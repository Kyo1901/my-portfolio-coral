import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import GuestbookForm from './guestbook-form.jsx';
import ContactInfo from './contact-info.jsx';
import GuestbookList from './guestbook-list.jsx';
import useGuestbook from '../../hooks/use-guestbook.js';
import { colors } from '../../theme.js';

const CONTACT_EMAIL = 'skadnjs153@naver.com';
const GITHUB_URL = 'https://github.com/Kyo1901';

/**
 * ContactSection 컴포넌트
 * Home 페이지 최하단 연락처 & 방명록 섹션
 * 좌측 방명록 작성 폼, 우측 연락처 정보, 하단 방명록 리스트로 구성
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const { entries, isLoading, error, addEntry } = useGuestbook();

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
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: colors.onSurface,
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          Contact
        </Typography>

        <Grid container spacing={3} sx={{ mb: { xs: 5, md: 7 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <GuestbookForm onSubmit={addEntry} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                backgroundColor: colors.primaryContainer,
                borderRadius: 3,
              }}
            >
              <ContactInfo email={CONTACT_EMAIL} githubUrl={GITHUB_URL} />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              fontWeight: 700,
              color: colors.onSurface,
            }}
          >
            방명록
          </Typography>
          {!isLoading && !error && (
            <Typography sx={{ fontSize: '0.95rem', color: colors.outline }}>
              총 {entries.length}개
            </Typography>
          )}
        </Box>
        <GuestbookList entries={entries} isLoading={isLoading} error={error} />
      </Container>
    </Box>
  );
}

export default ContactSection;
