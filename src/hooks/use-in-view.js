import { useEffect, useRef, useState } from 'react';

/**
 * useInView 커스텀 훅
 * 요소가 화면에 처음 보이는 순간 한 번만 true 로 바뀐다 (IntersectionObserver 미지원 환경에서는 즉시 true)
 *
 * Props:
 * @param {number} threshold - 요소가 몇 %(0~1) 보여야 true 로 볼지 [Optional, 기본값: 0.3]
 *
 * Example usage:
 * const [ref, isInView] = useInView();
 * <div ref={ ref }>{ isInView ? '보임' : '안 보임' }</div>
 */
function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;

    if (isInView || !element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, threshold]);

  return [ref, isInView];
}

export default useInView;
