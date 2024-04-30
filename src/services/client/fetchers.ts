export async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}