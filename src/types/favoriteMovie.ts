export type favoriteMovie = {
  id: number;
  'movie-name': string;
  rating: number;
  imgLink: string;
  releaseDate: string;
  votes: number;
  genreIds: Array<number>;
  genres: Array<{id: number; name: string}>;
  favoriteMovies?: Array<favoriteMovie>;
};
