import { useEffect, useState } from 'react';

/**
 * useTypewriter 커스텀 훅
 * 문자열을 한 글자씩 타이핑하듯 보여준다 (모션 감소 설정이면 처음부터 전체를 보여줌)
 *
 * Props:
 * @param {string} text - 타이핑할 문자열 [Required]
 * @param {number} speed - 한 글자당 시간(ms) [Optional, 기본값: 70]
 * @param {number} startDelay - 시작 전 대기 시간(ms) [Optional, 기본값: 0]
 *
 * Example usage:
 * const { typed, isDone } = useTypewriter('Figma에서 React까지,', 70, 400);
 */
function useTypewriter(text, speed = 70, startDelay = 0) {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [count, setCount] = useState(isReducedMotion ? text.length : 0);

  useEffect(() => {
    if (isReducedMotion) {
      return undefined;
    }

    let current = 0;
    let timerId;

    const tick = () => {
      current += 1;
      setCount(current);

      if (current < text.length) {
        timerId = setTimeout(tick, speed);
      }
    };

    timerId = setTimeout(tick, startDelay);

    return () => clearTimeout(timerId);
  }, [text, speed, startDelay, isReducedMotion]);

  return { typed: text.slice(0, count), isDone: count >= text.length };
}

export default useTypewriter;
