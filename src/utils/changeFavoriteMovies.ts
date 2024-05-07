import {favoriteMovie} from '@/types/favoriteMovie';

export function changeFavoriteMovies(
  arr: Array<favoriteMovie>,
  item: favoriteMovie,
): Array<favoriteMovie> {
  const resultArr = structuredClone(arr);

  for (let movie of resultArr) {
    if (movie.id === item.id) {
      movie.rating = item.rating;
      return resultArr;
    }
  }

  resultArr.push(item);

  return resultArr;
}
