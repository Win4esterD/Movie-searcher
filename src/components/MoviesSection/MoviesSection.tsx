'use client';
import {Box, Flex} from '@mantine/core';
import style from './MoviesSection.module.css';
import {SearchInput, Dropdown, NumInput} from '@/components';
import {useDataFetcher} from '@/hooks';
import {fetchMovies, baseUrl} from '@/services/';

export function MoviesSection() {
  const movies = useDataFetcher(baseUrl, fetchMovies);
  console.log(movies);
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
    </>
  );
}
