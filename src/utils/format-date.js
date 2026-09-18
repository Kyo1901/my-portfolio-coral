/**
 * formatDate 유틸 함수
 * ISO 8601 날짜 문자열을 'YYYY.MM.DD' 형태로 변환
 *
 * @param {string} isoString - ISO 8601 날짜 문자열 [Required]
 *
 * Example usage:
 * formatDate('2026-09-18T09:07:01.914207+00:00') // '2026.09.18'
 */
function formatDate(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

export default formatDate;
