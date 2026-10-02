/**
 * 스킬 데이터 가공 유틸 (About Me 스킬 섹션 및 Home 탭 연동용)
 */

/**
 * 숙련도 높은 순으로 정렬한 새 배열을 반환한다 (원본은 변경하지 않음)
 * @param {array} skills - 스킬 배열
 * @returns {array}
 */
export function sortSkillsByLevel(skills) {
  return [...skills].sort((a, b) => b.level - a.level);
}

/**
 * 숙련도 상위 N개 스킬을 반환한다
 * @param {array} skills - 스킬 배열
 * @param {number} count - 가져올 개수
 * @returns {array}
 */
export function getTopSkills(skills, count) {
  return sortSkillsByLevel(skills).slice(0, count);
}

/**
 * 메인 스킬(isMain: true)만 숙련도 순으로 반환한다
 * @param {array} skills - 스킬 배열
 * @returns {array}
 */
export function getMainSkills(skills) {
  return sortSkillsByLevel(skills.filter((skill) => skill.isMain));
}

/**
 * 카테고리별로 그룹핑한다 (카테고리 순서는 최초 등장 순서, 그룹 내부는 숙련도 순)
 * @param {array} skills - 스킬 배열
 * @returns {array} [{ category, skills }]
 */
export function groupSkillsByCategory(skills) {
  const groups = [];

  sortSkillsByLevel(skills).forEach((skill) => {
    const group = groups.find((item) => item.category === skill.category);
    if (group) {
      group.skills.push(skill);
    } else {
      groups.push({ category: skill.category, skills: [skill] });
    }
  });

  const categoryOrder = [...new Set(skills.map((skill) => skill.category))];
  return groups.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
}

/**
 * 숙련도 구간 기준 (포트폴리오 기획서.md 4.3 기반, 높은 구간부터 나열)
 * - min: 구간 시작 퍼센트, name: 짧은 이름, description: 구간 설명
 */
export const SKILL_LEVEL_GUIDE = [
  { min: 90, name: '설계·구현', range: '90% 이상', description: '참고 자료 없이 구조를 설계하고 직접 구현할 수 있습니다.' },
  { min: 80, name: '실무 수준', range: '80%대', description: '실무 수준의 작업이 가능하며, 일부는 문서를 참고합니다.' },
  { min: 70, name: '응용 가능', range: '70%대', description: '기본기와 응용이 가능하고, 고급 기능은 학습 중입니다.' },
  { min: 0, name: '학습 중', range: '60%대', description: '핵심 개념을 이해하고 있으며, 계속 학습하고 있습니다.' },
];

/**
 * 숙련도에 해당하는 구간 정보를 반환한다
 * @param {number} level - 숙련도 퍼센트
 * @returns {object} SKILL_LEVEL_GUIDE 의 항목
 */
export function getSkillLevelInfo(level) {
  return SKILL_LEVEL_GUIDE.find((guide) => level >= guide.min) ?? SKILL_LEVEL_GUIDE[SKILL_LEVEL_GUIDE.length - 1];
}

/**
 * 카테고리별 색상 (Material 3 색상 토큰 CSS 변수)
 */
export const CATEGORY_COLORS = {
  Frontend: 'var(--md-primary)',
  Framework: 'var(--md-tertiary)',
  Design: 'var(--md-secondary)',
  Background: 'var(--md-on-surface-variant)',
  'Tool & etc': 'var(--md-outline)',
};

export const DEFAULT_CATEGORY_COLOR = 'var(--md-primary)';
