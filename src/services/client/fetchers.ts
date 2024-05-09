export async function fetchData(url: string) {
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
  }
}
