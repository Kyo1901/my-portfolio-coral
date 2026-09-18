import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase.js';

const GUESTBOOK_COLUMNS = 'id, name, message, rating, created_at';

/**
 * useGuestbook 커스텀 훅
 * 방명록 목록 조회 및 새 항목 등록 기능 제공 (email 컬럼은 조회하지 않음)
 *
 * Example usage:
 * const { entries, isLoading, error, addEntry } = useGuestbook();
 */
function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchEntries() {
      const { data, error: fetchError } = await supabase
        .from('guestbook')
        .select(GUESTBOOK_COLUMNS)
        .order('created_at', { ascending: false });

      if (!isMounted) {
        return;
      }

      if (fetchError) {
        setError('방명록을 불러오지 못했습니다.');
      } else {
        setEntries(data ?? []);
      }
      setIsLoading(false);
    }

    fetchEntries();

    return () => {
      isMounted = false;
    };
  }, []);

  const addEntry = useCallback(async ({ name, email, message, rating }) => {
    const { data, error: insertError } = await supabase
      .from('guestbook')
      .insert({ name, email, message, rating })
      .select(GUESTBOOK_COLUMNS)
      .single();

    if (insertError) {
      throw new Error('방명록 등록에 실패했습니다.');
    }

    setEntries((prev) => [data, ...prev]);
  }, []);

  return { entries, isLoading, error, addEntry };
}

export default useGuestbook;
