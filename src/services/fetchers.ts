import {authKey} from './apiKey';

export async function fetchMovies(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authKey}`,
      },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function fetchGenres(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authKey}`,
      },
    });
    const genres = await response.json();
    return await genres.genres;
  } catch (err) {
    console.log(err);
  }
}
