import { createContext } from 'react';

/**
 * PortfolioContext
 * About Me 데이터(기본 정보, 콘텐츠 섹션, 스킬)와 홈 탭용 가공 데이터를 앱 전역에 공유한다.
 * 직접 사용하지 말고 hooks/use-portfolio.js 의 usePortfolio 로 접근한다.
 */
const PortfolioContext = createContext(null);

export default PortfolioContext;
