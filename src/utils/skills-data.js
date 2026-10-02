/**
 * 스킬 데이터 (프롬프트.txt 의 기본 스킬 템플릿 5종 + 추가 가능한 기술 6종)
 *
 * - icon: components/ui/skill-icon.jsx 의 SKILL_ICONS 키
 * - level: 숙련도 퍼센트 (0~100)
 * - category: Frontend / Framework / Design / Background / Tool & etc
 * - description: 호버 시 툴팁으로 보여줄 간단한 설명
 * - projects: 이 기술을 사용한 프로젝트 title 목록 (projects 테이블의 title 과 일치해야 링크 연결됨)
 * - isMain: 메인 스킬 여부 (Home 탭 연동 시 대표 스킬 표시 기준)
 */
const skillsData = [
  {
    id: 1,
    icon: 'html',
    name: 'HTML',
    projects: ['Novel Story', 'TrackFit'],
    level: 90,
    category: 'Frontend',
    description: '의미에 맞는 태그로 웹 문서의 구조를 설계합니다.',
    isMain: true,
  },
  {
    id: 2,
    icon: 'css',
    name: 'CSS',
    projects: ['Novel Story', 'TrackFit'],
    level: 80,
    category: 'Frontend',
    description: '반응형 레이아웃과 디자인 토큰 기반 스타일링을 구현합니다.',
    isMain: true,
  },
  {
    id: 3,
    icon: 'javascript',
    name: 'JavaScript',
    projects: ['Novel Story', 'TrackFit'],
    level: 80,
    category: 'Frontend',
    description: '화면의 동작과 비동기 데이터 처리를 구현합니다.',
    isMain: true,
  },
  {
    id: 4,
    icon: 'react',
    name: 'React',
    projects: ['Novel Story', 'TrackFit'],
    level: 70,
    category: 'Framework',
    description: '컴포넌트와 Hooks 로 재사용 가능한 UI 를 만듭니다.',
    isMain: true,
  },
  {
    id: 5,
    icon: 'figma',
    name: 'Figma',
    level: 80,
    category: 'Design',
    description: '와이어프레임부터 UI 시안, 디자인 시스템까지 설계합니다.',
    isMain: true,
  },
  {
    id: 6,
    icon: 'java',
    name: 'Java',
    level: 80,
    category: 'Background',
    description: '객체지향 설계를 바탕으로 백엔드 로직을 작성합니다.',
    isMain: false,
  },
  {
    id: 7,
    icon: 'python',
    name: 'Python',
    level: 80,
    category: 'Background',
    description: '데이터 처리와 반복 작업 자동화에 활용합니다.',
    isMain: false,
  },
  {
    id: 8,
    icon: 'c',
    name: 'C',
    level: 65,
    category: 'Background',
    description: '메모리와 포인터 등 컴퓨터 동작의 기초를 이해합니다.',
    isMain: false,
  },
  {
    id: 9,
    icon: 'cpp',
    name: 'C++',
    level: 60,
    category: 'Background',
    description: '자료구조와 알고리즘 학습에 활용합니다.',
    isMain: false,
  },
  {
    id: 10,
    icon: 'git',
    name: 'Git',
    projects: ['Novel Story', 'TrackFit'],
    level: 75,
    category: 'Tool & etc',
    description: '브랜치와 커밋으로 변경 이력을 관리하고 GitHub 로 협업합니다.',
    isMain: false,
  },
  {
    id: 11,
    icon: 'sql',
    name: 'SQL',
    projects: ['Novel Story', 'TrackFit'],
    level: 70,
    category: 'Background',
    description: '테이블 설계와 조회·수정 쿼리를 작성합니다.',
    isMain: false,
  },
];

export default skillsData;
