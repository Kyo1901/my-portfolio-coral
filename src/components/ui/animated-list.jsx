import * as React from 'react';
import { motion } from 'motion/react';
import Grid from '@mui/material/Grid';
import AnimatedListItem from './animated-list-item.jsx';
import useInView from '../../hooks/use-in-view.js';

/**
 * AnimatedList 컴포넌트
 * Magic UI Animated List 스타일의 목록: 목록이 화면에 보이면 항목이 하나씩 순서대로 스프링으로 튀어나온다
 * - 처음 화면에 보일 때 staggerDelay 간격으로 순차 표시된다
 * - 이후 추가되는 항목(더보기, 새 글 등록)은 바로 튀어나오며, 맨 앞에 추가되면 기존 항목은 부드럽게 밀려난다
 *
 * Props:
 * @param {array} items - 표시할 항목 배열 [Required]
 * @param {function} getKey - 항목에서 고유 key 를 꺼내는 함수 (item) => key [Required]
 * @param {function} renderItem - 항목을 그리는 함수 (item) => ReactNode [Required]
 * @param {number} staggerDelay - 항목 사이 지연 시간(초) [Optional, 기본값: 0.12]
 * @param {object} gridSize - 항목 하나의 Grid size (반응형 열 수) [Optional, 기본값: { xs: 12, md: 6 }]
 *
 * Example usage:
 * <AnimatedList items={ entries } getKey={ (entry) => entry.id } renderItem={ (entry) => <Card /> } />
 */
function AnimatedList({ items, getKey, renderItem, staggerDelay = 0.12, gridSize = { xs: 12, md: 6 } }) {
  const [containerRef, isInView] = useInView(0.1);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  };

  return (
    <Grid
      container
      spacing={2}
      component={motion.div}
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((item) => (
        <Grid key={getKey(item)} size={gridSize}>
          <AnimatedListItem>{renderItem(item)}</AnimatedListItem>
        </Grid>
      ))}
    </Grid>
  );
}

export default AnimatedList;
