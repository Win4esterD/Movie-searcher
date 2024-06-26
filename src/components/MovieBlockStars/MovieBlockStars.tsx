'use client';
import style from './MovieBlockStars.module.css';
import Image from 'next/image';
import {Box, Text} from '@mantine/core';
import starUnliked from '/public/assets/img/icons/starUnliked.svg';
import starPurple from '/public/assets/img/icons/starPurple.svg';
import {useSaveMoviesInLocalStorage} from '@/hooks';
import {useState, useEffect} from 'react';
import {favoriteMovie} from '@/types/favoriteMovie';
import {ModalWindow} from '../ModalWindow/ModalWindow';

type MovieBlockStars = {
  id?: string;
  title?: string;
  releaseDate?: string;
  rating?: number;
  poster?: string;
  votes?: number;
  genres?: Array<number>;
};

export function MovieBlockStars({
  id,
  title,
  releaseDate,
  rating,
  poster,
  votes,
  genres,
}: MovieBlockStars): JSX.Element {
  const [favoriteMovies, setFavoriteMovies] = useSaveMoviesInLocalStorage();
  const [favorite, setFavorite] = useState<false | favoriteMovie>(false);
  const [modalOpened, setModalOpen] = useState(false);

  useEffect(() => {
    for (let item of favoriteMovies) {
      if (item.id === Number(id)) {
        setFavorite(item);
        return;
      }
    }
    setFavorite(false);
  }, [favoriteMovies]);

  return (
    <Box className={style.starBlock}>
      <ModalWindow
        isOpened={modalOpened}
        setModal={setModalOpen}
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
        modalInfo={{
          id: Number(id),
          'movie-name': title ? title : '',
          rating: favorite ? favorite.rating : 0,
          imgLink: poster ? poster : '',
          releaseDate: releaseDate ? releaseDate : '',
          votes: votes ? votes : 0,
          genreIds: genres ? genres : [0],
          genres: favorite ? favorite.genres : [{id: 0, name: ''}],
        }}
      />
      <Image
        src={!favorite ? starUnliked : starPurple}
        alt="rating"
        width="23.3"
        height="22.16"
        onClick={() => setModalOpen(true)}
      />
      {favorite && (
        <Text fw={600} size="xl">
          {favorite?.rating}
        </Text>
      )}
    </Box>
  );
}
