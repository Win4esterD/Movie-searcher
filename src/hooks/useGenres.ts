import {useEffect, useState} from 'react';
import {fetchData} from '@/services';

export function useGenres(): Array<{id: number; name: string}> {
  const [genres, setGenres] = useState<any>();
  const genreAPIurl = '/api/genres/';

  useEffect(() => {
    async function fetching() {
      const result = await fetchData(genreAPIurl);
      setGenres(result?.genres);
    }

    fetching();
  }, []);

  return genres;
}
