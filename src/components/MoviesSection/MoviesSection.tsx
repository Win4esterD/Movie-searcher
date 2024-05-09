'use client';
import {Box, Flex} from '@mantine/core';
import style from './MoviesSection.module.css';
import {
  SearchInput,
  Dropdown,
  MovieCard,
  GenresDropdown,
  RatingInputs,
  ModalWindow,
  NotFound,
} from '@/components';
import {useMovieFetcher, useGenres} from '@/hooks';
import {fetchData} from '@/services/';
import {movie} from '@/types/movie';
import { useState} from 'react';
import {Pagination, Loader} from '@mantine/core';
import {useRouter} from 'next/navigation';
import {searchPageParams} from '@/types/searchPage';
import {getMoviesReleaseDates} from '@/utils';
import {searchParamsParser} from '@/utils';
import {sortFilters} from '@/utils';
import Link from 'next/link';
import { useSaveMoviesInLocalStorage } from '@/hooks';

export function MoviesSection({searchParams}: searchPageParams): JSX.Element {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({'movie-name': '', id: 0});
  const [favoriteMovies, setFaviriteMovies] = useSaveMoviesInLocalStorage();
  const movies = useMovieFetcher('/api/movies/', fetchData, searchParams);
  const results = movies?.results;
  const genres: Array<{id: number; name: string}> | undefined = useGenres();

  function pageChangeHandler(value: number) {
    const newSearchParams = structuredClone(searchParams);
    newSearchParams.page = value.toString();
    const params = searchParamsParser(newSearchParams);
    router.push(params);
  }

  return (
    <>
        <ModalWindow
          modalInfo={modalInfo}
          isOpened={modal}
          setModal={setModal}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFaviriteMovies}
        />
        <Box className={style.searchContainer}>
          <Box className={style.movies}>Movies</Box>
          <SearchInput searchParams={searchParams} />
        </Box>
        <Flex
          component="section"
          className={style.inputsSection}
          justify="space-between"
          wrap="wrap"
        >
          <GenresDropdown
            data={genres}
            searchParams={searchParams}
            placeholder="Select genre"
          />
          <Dropdown
            label="Release year"
            placeholder="Select release year"
            data={getMoviesReleaseDates()}
            searchParams={searchParams}
            filter="primary_release_year"
          />
          <RatingInputs searchParams={searchParams} />
          <Link
            className={style.resetFilters}
            href="/"
            onClick={() => setTimeout(() => window.location.reload(), 200)}
          >
            Reset filters
          </Link>
        </Flex>
        <Box className={style.sortInputWrapper}>
          <Dropdown
            data={sortFilters}
            searchParams={searchParams}
            filter="sort_by"
            label="Sort by"
          />
        </Box>
        <Flex wrap="wrap" justify="center" className={style.moviesBlock}>
          {movies ? (
            results.map((item: movie) => (
              <MovieCard
                key={item.id}
                imgLink={item.poster_path}
                movieName={item.title}
                releaseDate={item.release_date}
                rating={item.vote_average}
                votes={item.vote_count}
                genreIds={item.genre_ids}
                genres={genres}
                setModal={setModal}
                setModalInfo={setModalInfo}
                id={item.id}
                favoriteMovies={favoriteMovies}
              />
            ))
          ) : (
            <Loader
              size="xl"
              color="var(--main-purple)"
              style={{marginTop: '3.4rem'}}
            />
          )}
        </Flex>
      {results?.length > 0 && (
        <Pagination
          total={movies?.total_pages}
          boundaries={0}
          color="var(--main-purple)"
          className={style.pagination}
          onChange={pageChangeHandler}
          value={movies ? movies.page : 1}
        />
      )}
      {results?.length === 0 && <NotFound />}
    </>
  );
}
