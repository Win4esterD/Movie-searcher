import {useState, useEffect, Dispatch} from 'react';
import {favoriteMovie} from '@/types/favoriteMovie';

export function useSaveMoviesInLocalStorage(): [
  Array<favoriteMovie>,
  Dispatch<Array<favoriteMovie>>,
] {
  const [favoriteMovies, setFaviriteMovies] = useState<
    [] | Array<favoriteMovie>
  >([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setFaviriteMovies(JSON.parse(savedMovies));
    } else {
      localStorage.setItem('movies', '[]');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  return [favoriteMovies, setFaviriteMovies];
}
