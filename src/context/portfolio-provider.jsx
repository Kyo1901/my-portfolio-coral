import * as React from 'react';
import PortfolioContext from './portfolio-context.js';
import aboutMeData from '../utils/about-me-data.js';
import skillsData from '../utils/skills-data.js';
import { getTopSkills } from '../utils/skill-utils.js';
import { createSummary } from '../utils/text-utils.js';

const HOME_SKILL_COUNT = 4;
const HOME_SUMMARY_LENGTH = 100;

/**
 * PortfolioProvider 컴포넌트
 * About Me 데이터를 state 로 보관하고, 홈 탭용 데이터(showInHome 섹션 요약 + 상위 스킬)를 자동 생성해 제공한다.
 * About Me 데이터가 바뀌면 이 Provider 를 구독하는 홈 탭이 즉시 다시 그려진다.
 *
 * Props:
 * @param {ReactNode} children - 하위 컴포넌트 [Required]
 *
 * Provided value:
 * - aboutMeData: { basicInfo, sections, skills }
 * - setAboutMeData: 전체 데이터 교체 함수
 * - updateSection(id, patch): 콘텐츠 섹션 일부 수정
 * - updateSkillLevel(id, level): 스킬 숙련도 수정 (0~100)
 * - getHomeData(): { basicInfo, content: [{ id, title, summary }], skills }
 *
 * Example usage:
 * <PortfolioProvider><App /></PortfolioProvider>
 */
function PortfolioProvider({ children }) {
  const [data, setAboutMeData] = React.useState(() => ({
    basicInfo: aboutMeData.basicInfo,
    sections: aboutMeData.sections,
    skills: skillsData,
  }));

  const updateSection = React.useCallback((id, patch) => {
    setAboutMeData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) => (section.id === id ? { ...section, ...patch } : section)),
    }));
  }, []);

  const updateSkillLevel = React.useCallback((id, level) => {
    const nextLevel = Math.min(100, Math.max(0, Number(level) || 0));

    setAboutMeData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) => (skill.id === id ? { ...skill, level: nextLevel } : skill)),
    }));
  }, []);

  const homeData = React.useMemo(() => ({
    basicInfo: data.basicInfo,
    content: data.sections
      .filter((section) => section.showInHome)
      .map((section) => ({
        id: section.id,
        title: section.title,
        summary: section.homeSummary ?? createSummary(section.content, HOME_SUMMARY_LENGTH),
      })),
    skills: getTopSkills(data.skills, HOME_SKILL_COUNT),
  }), [data]);

  const getHomeData = React.useCallback(() => homeData, [homeData]);

  const value = React.useMemo(() => ({
    aboutMeData: data,
    setAboutMeData,
    updateSection,
    updateSkillLevel,
    getHomeData,
  }), [data, updateSection, updateSkillLevel, getHomeData]);

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export default PortfolioProvider;
