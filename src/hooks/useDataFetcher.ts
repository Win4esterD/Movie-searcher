import {useEffect, useState} from 'react';

export function useDataFetcher(url: string, func: Function): any {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetching() {
      const movies = await func(url);
      setMovies(movies);
    }

    fetching();
  }, []);

  return movies;
}
