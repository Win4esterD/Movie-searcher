import { MovieResponseType } from '@/types/movie';

export async function fetchData(url: string): Promise<MovieResponseType> {
  try {
    const response = await fetch(url, {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
