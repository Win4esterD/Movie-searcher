export function getMoviesReleaseDates() {
  const firstEverMovie = 1895;
  const currentYear = new Date().getFullYear();
  const dates = [];

  for (let i = currentYear; i >= firstEverMovie; i--) {
    dates.push(i.toString());
  }

  return dates;
}
