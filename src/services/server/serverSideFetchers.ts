export async function serveMovies(url: string, authKey: string): Promise<any> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-cache',
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
      next: {revalidate: 3600},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${authKey}`,
      },
    });
    const result = await response.json();
    return await result;
  } catch (err) {
    console.log(err);
  }
}
