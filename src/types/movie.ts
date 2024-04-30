export type movie = {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: Array<number>;
};