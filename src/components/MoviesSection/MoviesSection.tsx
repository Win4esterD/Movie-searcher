'use client';
import {Box, Flex} from '@mantine/core';
import style from './MoviesSection.module.css';
import {SearchInput, Dropdown, NumInput, MovieCard} from '@/components';
import {useDataFetcher} from '@/hooks';
import {fetchMovies, baseUrl} from '@/services/';

export function MoviesSection() {
  const movies = useDataFetcher(baseUrl, fetchMovies);
  const firstMovie = movies?.results[0]
  console.log(firstMovie);
  return (
    <>
      <Box className={style.searchContainer}>
        <Box className={style.movies}>Movies</Box>
        <SearchInput />
      </Box>
      <Flex
        component="section"
        className={style.inputsSection}
        justify="space-between"
        wrap="wrap"
      >
        <Dropdown />
        <Dropdown label="Release year" data={['Select release year']} />
        <NumInput label="Ratings" placeholder="From" />
        <NumInput placeholder="To" />
        <Box component="span" className={style.resetFilters}>
          Reset filters
        </Box>
      </Flex>
      <Box className={style.sortInputWrapper}>
        <Dropdown label="Sort by" data={['Most popular']} />
      </Box>
      <Flex>
        <MovieCard
          imgLink={firstMovie?.poster_path}
          movieName={firstMovie?.title}
          releaseDate={firstMovie?.release_date}
          rating={firstMovie?.vote_average}
          votes={firstMovie?.vote_count}
          genreIds={firstMovie?.genre_ids}
        />
      </Flex>
    </>
  );
}
