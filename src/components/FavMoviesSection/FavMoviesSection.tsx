'use client';
import {Box, Pagination, Flex} from '@mantine/core';
import style from './FavMoviesSection.module.css';
import {MovieCard, FavMoviesEmptyState} from '@/components';
import {useSaveMoviesInLocalStorage, useGenres} from '@/hooks';
import {useState} from 'react';
import {favoriteMovie} from '@/types/favoriteMovie';
import {ModalWindow} from '../ModalWindow/ModalWindow';
import {paginateArray} from '@/utils/paginateArray';

export function FavMoviesSection() {
  const [favoriteMovies, setFaviriteMovies] = useSaveMoviesInLocalStorage();
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<favoriteMovie>({
    'movie-name': '',
    id: 0,
    imgLink: '',
    releaseDate: '',
    rating: 0,
    votes: 0,
    genreIds: [0],
    genres: [{id: 0, name: ''}],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const genres = useGenres();
  const subarray = paginateArray(favoriteMovies, 4);

  return (
    <>
      <Flex className={style.movieSection}>
        <ModalWindow
          modalInfo={modalInfo}
          isOpened={modal}
          setModal={setModal}
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFaviriteMovies}
        />
        {favoriteMovies.length === 0 ? (
          <FavMoviesEmptyState />
        ) : (
          subarray?.[currentPage - 1]?.map(item => {
            return (
              <MovieCard
                imgLink={item.imgLink}
                movieName={item['movie-name']}
                releaseDate={item.releaseDate}
                rating={item.rating}
                votes={item.votes}
                genreIds={item.genreIds}
                genres={genres}
                setModal={setModal}
                setModalInfo={setModalInfo}
                id={item.id}
                favoriteMovies={favoriteMovies}
                key={item.id}
              />
            );
          })
        )}
      </Flex>
      <Box className={style.paginationBlock}>
        <Pagination
          color="var(--main-purple)"
          className={style.pagination}
          siblings={0}
          total={Math.ceil(favoriteMovies.length / 4)}
          value={currentPage}
          onChange={value => setCurrentPage(value)}
        />
      </Box>
    </>
  );
}
