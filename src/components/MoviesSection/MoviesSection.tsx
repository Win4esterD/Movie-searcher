'use client';
import {Box, Flex} from '@mantine/core';
import style from './MoviesSection.module.css';
import {SearchInput, Dropdown, NumInput, MovieCard} from '@/components';
import {useDataFetcher} from '@/hooks';
import {fetchData} from '@/services/';
import {movie} from '@/types/movie';

export function MoviesSection() {
  const link = window.location.origin + '/api/movies/';
  const movies = useDataFetcher(link, fetchData);

  const results = movies?.results;
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
      <Flex wrap="wrap" justify="center" className={style.moviesBlock}>
        {results?.map((item: movie) => (
          <MovieCard
            key={item.id}
            imgLink={item.poster_path}
            movieName={item.title}
            releaseDate={item.release_date}
            rating={item.vote_average}
            votes={item.vote_count}
            genreIds={item.genre_ids}
          />
        ))}
      </Flex>
    </>
  );
}
