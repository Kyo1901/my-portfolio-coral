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
