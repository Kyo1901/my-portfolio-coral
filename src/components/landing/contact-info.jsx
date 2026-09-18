import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from '../../theme.js';

/**
 * ContactInfo 컴포넌트
 * 이메일(아이콘+텍스트, 클릭 시 클립보드 복사)과 SNS(GitHub) 원형 아이콘 버튼을 보여주는 연락처 정보 영역
 *
 * Props:
 * @param {string} email - 공개 이메일 주소 [Required]
 * @param {string} githubUrl - GitHub 프로필 URL [Required]
 *
 * Example usage:
 * <ContactInfo email="skadnjs153@naver.com" githubUrl="https://github.com/Kyo1901" />
 */
function ContactInfo({ email, githubUrl }) {
  const [isCopied, setIsCopied] = React.useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 3,
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '1.3rem', md: '1.6rem' },
          fontWeight: 700,
          color: colors.textPrimary,
        }}
      >
        Get In Touch
      </Typography>

      <Tooltip title="클릭하여 이메일 주소 복사">
        <Box
          role="button"
          tabIndex={0}
          onClick={handleCopyEmail}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleCopyEmail();
            }
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            cursor: 'pointer',
            width: 'fit-content',
            '&:hover .contact-info__email-text': {
              color: colors.linkHover,
            },
          }}
        >
          <EmailIcon sx={{ color: colors.accent }} />
          <Typography
            className="contact-info__email-text"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: colors.textSecondary,
            }}
          >
            {email}
          </Typography>
          <ContentCopyIcon sx={{ fontSize: 16, color: colors.textMuted }} />
        </Box>
      </Tooltip>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: colors.textMuted,
          }}
        >
          Follow Us On
        </Typography>
        <IconButton
          component="a"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{
            width: 44,
            height: 44,
            backgroundColor: colors.secondary,
            border: `1px solid ${colors.buttonHover}`,
            color: colors.textPrimary,
            '&:hover': {
              backgroundColor: colors.buttonHover,
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>

      <Snackbar
        open={isCopied}
        autoHideDuration={2000}
        onClose={() => setIsCopied(false)}
        message="이메일 주소가 복사되었습니다."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}

export default ContactInfo;
