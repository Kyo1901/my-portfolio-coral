import { useContext } from 'react';
import PortfolioContext from '../context/portfolio-context.js';

/**
 * usePortfolio 커스텀 훅
 * PortfolioProvider 가 제공하는 About Me 데이터와 홈 탭용 데이터에 접근한다
 *
 * Example usage:
 * const { aboutMeData, getHomeData, updateSection } = usePortfolio();
 */
function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error('usePortfolio 는 PortfolioProvider 안에서만 사용할 수 있습니다.');
  }

  return context;
}

export default usePortfolio;
