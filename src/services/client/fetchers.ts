export async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}