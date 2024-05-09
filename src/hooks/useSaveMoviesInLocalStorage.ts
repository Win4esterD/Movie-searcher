import {useState, useEffect} from 'react';

export function useSaveMoviesInLocalStorage() {
  const [favoriteMovies, setFaviriteMovies] = useState<any>([]);

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

  return {favoriteMovies, setFaviriteMovies};
}
