import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

const PROJECT_COLUMNS =
  'id, title, description, tech_stack, detail_url, github_url, thumbnail_url, is_personal, sort_order';

/**
 * useProjects 커스텀 훅
 * 게시된(is_published) 프로젝트 목록을 sort_order 순으로 조회
 *
 * Props:
 * @param {number} limit - 조회할 최대 개수 [Optional, 기본값: 전체]
 *
 * Example usage:
 * const { projects, isLoading, error } = useProjects();
 */
function useProjects(limit) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProjects() {
      let query = supabase
        .from('projects')
        .select(PROJECT_COLUMNS)
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error: fetchError } = await query;

      if (!isMounted) {
        return;
      }

      if (fetchError) {
        setError('프로젝트를 불러오지 못했습니다.');
      } else {
        setProjects(data ?? []);
      }
      setIsLoading(false);
    }

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { projects, isLoading, error };
}

export default useProjects;
