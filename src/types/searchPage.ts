export type searchPageParams = {
  searchParams: searchParams;
};

export type searchParams = {
  page?: string;
  query?: string;
  primary_release_year?: string;
  popularity_desc?: string;
  'vote_average.desc'?: string;
  'vote_count.desc'?: string;
  'primary_release_date.desc'?: string;
  'title.desc'?: string;
};
