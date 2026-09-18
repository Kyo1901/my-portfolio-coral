import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { colors } from '../../theme.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM = { name: '', email: '', message: '', rating: null };

/**
 * GuestbookForm 컴포넌트
 * 방명록 작성 폼 (이름, 이메일, 메시지, 별점, 등록 버튼)
 *
 * Props:
 * @param {function} onSubmit - 방명록 등록 처리 함수, { name, email, message, rating } 인자를 받는 Promise 반환 함수 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmit={addEntry} />
 */
function GuestbookForm({ onSubmit }) {
  const [form, setForm] = React.useState(INITIAL_FORM);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitResult, setSubmitResult] = React.useState(null);

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function validate() {
    const nextErrors = {};

    if (form.name.trim().length < 1 || form.name.trim().length > 50) {
      nextErrors.name = '이름을 1~50자로 입력해주세요.';
    }
    if (form.email.trim().length > 0 && !EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    if (form.message.trim().length < 1 || form.message.trim().length > 500) {
      nextErrors.message = '메시지를 1~500자로 입력해주세요.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        name: form.name.trim(),
        email: form.email.trim().length > 0 ? form.email.trim() : null,
        message: form.message.trim(),
        rating: form.rating,
      });
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitResult({ type: 'success', text: '방명록이 등록되었습니다. 감사합니다!' });
    } catch (submitError) {
      setSubmitResult({ type: 'error', text: submitError.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        p: { xs: 3, md: 4 },
        backgroundColor: colors.secondary,
        borderRadius: 3,
        border: `1px solid ${colors.buttonHover}`,
      }}
    >
      <TextField
        label="Your Name"
        placeholder="이름을 입력해주세요"
        value={form.name}
        onChange={handleChange('name')}
        error={Boolean(errors.name)}
        helperText={errors.name}
        fullWidth
      />
      <TextField
        label="Your Email (선택)"
        placeholder="이메일 주소를 입력해주세요 (선택 입력)"
        value={form.email}
        onChange={handleChange('email')}
        error={Boolean(errors.email)}
        helperText={errors.email}
        fullWidth
      />
      <TextField
        label="Your Message"
        placeholder="방명록에 남길 메시지를 입력해주세요"
        value={form.message}
        onChange={handleChange('message')}
        error={Boolean(errors.message)}
        helperText={errors.message}
        multiline
        minRows={4}
        fullWidth
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography sx={{ fontSize: '0.95rem', color: colors.textSecondary }}>
          별점 평가
        </Typography>
        <Rating
          value={form.rating}
          onChange={(_event, newValue) => setForm((prev) => ({ ...prev, rating: newValue }))}
          sx={{ color: colors.accent }}
        />
      </Box>

      {submitResult && (
        <Alert severity={submitResult.type === 'success' ? 'success' : 'error'}>
          {submitResult.text}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          alignSelf: 'flex-start',
          backgroundColor: colors.accent,
          color: colors.secondary,
          px: 4,
          '&:hover': {
            backgroundColor: colors.linkHover,
          },
        }}
      >
        {isSubmitting ? <CircularProgress size={22} sx={{ color: colors.secondary }} /> : '등록하기'}
      </Button>
    </Box>
  );
}

export default GuestbookForm;
