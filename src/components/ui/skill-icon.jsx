import * as React from 'react';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HubIcon from '@mui/icons-material/Hub';
import PaletteIcon from '@mui/icons-material/Palette';
import CoffeeIcon from '@mui/icons-material/Coffee';
import TerminalIcon from '@mui/icons-material/Terminal';
import MemoryIcon from '@mui/icons-material/Memory';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

const SKILL_ICONS = {
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavascriptIcon,
  react: HubIcon,
  figma: PaletteIcon,
  java: CoffeeIcon,
  python: TerminalIcon,
  c: MemoryIcon,
  cpp: DataObjectIcon,
  git: AccountTreeIcon,
  sql: StorageIcon,
};

/**
 * SkillIcon 컴포넌트
 * 스킬 데이터의 icon 키에 맞는 MUI 아이콘을 렌더링 (없는 키는 기본 코드 아이콘)
 *
 * Props:
 * @param {string} icon - skills-data 의 icon 키 [Required]
 * @param {object} sx - 아이콘에 적용할 sx 스타일 [Optional]
 *
 * Example usage:
 * <SkillIcon icon="html" sx={{ color: 'var(--md-primary)', fontSize: 28 }} />
 */
function SkillIcon({ icon, sx }) {
  const IconComponent = SKILL_ICONS[icon] ?? CodeIcon;

  return <IconComponent sx={sx} />;
}

export default SkillIcon;
