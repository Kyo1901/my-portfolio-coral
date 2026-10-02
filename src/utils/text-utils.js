/**
 * 긴 본문을 홈 탭용 요약문으로 줄인다 (문단 구분을 공백으로 합친 뒤 maxLength 글자까지 자르고 '...' 추가)
 * @param {string} text - 원문
 * @param {number} maxLength - 최대 글자 수 [기본값: 100]
 * @returns {string}
 */
export function createSummary(text, maxLength = 100) {
  const flattened = text.replace(/\s+/g, ' ').trim();

  if (flattened.length <= maxLength) {
    return flattened;
  }

  return `${flattened.substring(0, maxLength).trim()}...`;
}
