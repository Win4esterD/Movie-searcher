import {favoriteMovie} from '@/types/favoriteMovie';

export function isMovieInFavorites(
  favorites: Array<favoriteMovie>,
  id: number,
): boolean | favoriteMovie {
  for (let item of favorites) {
    if (item.id === id) {
      return item;
    }
  }

  return false;
}
