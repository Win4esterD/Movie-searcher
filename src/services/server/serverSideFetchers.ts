export async function serveMovies(url: string, authKey: string): Promise<any> {
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

export async function serveGenres(url: string, authKey: string): Promise<any> {
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
