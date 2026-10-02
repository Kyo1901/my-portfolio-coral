import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const SPRING_TRANSITION = { type: 'spring', stiffness: 350, damping: 40 };

const ITEM_VARIANTS = {
  hidden: { scale: 0, opacity: 0, originY: 0 },
  visible: { scale: 1, opacity: 1, originY: 0, transition: SPRING_TRANSITION },
};

/**
 * AnimatedListItem 컴포넌트
 * Magic UI Animated List 의 항목 효과: 작은 크기·투명 상태에서 스프링으로 튀어나오고, 위치가 바뀌면 부드럽게 밀려난다
 * 부모 AnimatedList 의 상태(hidden/visible)를 그대로 따라가므로 순서대로 나타나는 타이밍은 부모가 정한다
 * 모션 감소 설정(prefers-reduced-motion)이면 애니메이션 없이 바로 표시한다
 *
 * Props:
 * @param {ReactNode} children - 항목 내용 [Required]
 *
 * Example usage:
 * <AnimatedListItem><Card /></AnimatedListItem>
 */
function AnimatedListItem({ children }) {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) {
    return <div style={{ height: '100%' }}>{children}</div>;
  }

  return (
    <motion.div layout variants={ITEM_VARIANTS} transition={SPRING_TRANSITION} style={{ height: '100%' }}>
      {children}
    </motion.div>
  );
}

export default AnimatedListItem;
