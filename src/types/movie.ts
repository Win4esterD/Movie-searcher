import {video} from './video';

export type movie = {
  title: string;
  id: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: Array<number>;
  videos: {results: Array<video>};
  production_companies: Array<productionCompany>;
  runtime: number;
  budget: number;
  revenue: number;
  genres: Array<{id: number; name: string}>;
  overview: string;
};

export type productionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
