import { MovieResponseType, MovieType } from '@/types/movie';
import { GenreType } from '@/types/GenreType';

export async function fetchMovies(url: string): Promise<MovieResponseType> {
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();
  return json;
}

export async function fetchSingleMovie(url: string): Promise<MovieType> {
  const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  return json;
}

export async function fetchGenres(): Promise<{
  genres: GenreType[];
}> {
  const response = await fetch('/api/genres/');
  const json = await response.json();
  return json;
}
