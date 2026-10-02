import * as React from 'react';
import Box from '@mui/material/Box';
import { FaCss3Alt, FaDatabase } from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiOpenjdk,
  SiPython,
  SiReact,
} from 'react-icons/si';
import CodeIcon from '@mui/icons-material/Code';

const SKILL_ICONS = {
  html: SiHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  react: SiReact,
  figma: SiFigma,
  java: SiOpenjdk,
  python: SiPython,
  c: SiC,
  cpp: SiCplusplus,
  git: SiGit,
  sql: FaDatabase,
};

/**
 * SkillIcon 컴포넌트
 * 스킬 데이터의 icon 키에 맞는 기술 로고 아이콘(react-icons)을 렌더링 (없는 키는 기본 코드 아이콘)
 * 단색 아이콘이라 sx 의 color 로 카테고리 색상을 입힐 수 있다
 *
 * Props:
 * @param {string} icon - skills-data 의 icon 키 [Required]
 * @param {object} sx - 아이콘에 적용할 sx 스타일 (color, fontSize 등) [Optional]
 *
 * Example usage:
 * <SkillIcon icon="html" sx={{ color: 'var(--md-primary)', fontSize: 28 }} />
 */
function SkillIcon({ icon, sx }) {
  const IconComponent = SKILL_ICONS[icon];

  if (!IconComponent) {
    return <CodeIcon sx={sx} />;
  }

  return <Box component={IconComponent} aria-hidden="true" sx={{ flexShrink: 0, ...sx }} />;
}

export default SkillIcon;
