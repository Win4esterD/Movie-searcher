import {useEffect, useState} from 'react';
import { fetchData } from '@/services';

export function useGenres(): any {
  const [genres, setGenres] = useState();
  const genreAPIurl = location?.origin + '/api/genres/';

  useEffect(() => {
    async function fetching() {
      const result = await fetchData(genreAPIurl);
      setGenres(result?.genres);
    }

    fetching();
  }, []);

  return genres;
}
