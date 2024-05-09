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
};

export function MovieBlockStars({id, title}: MovieBlockStars): JSX.Element {
  const [favoriteMovies, setFavoriteMovies] = useSaveMoviesInLocalStorage();
  const [favorite, setFavorite] = useState<false | favoriteMovie>(false);
  const [modalOpened, setModalOpen] = useState(false);

  useEffect(() => {
    for (let item of favoriteMovies) {
      if (item.id === Number(id)) {
        setFavorite(item);
        break;
      }
    }
  }, [favoriteMovies]);

  return (
    <Box className={style.starBlock}>
      <ModalWindow
        isOpened={modalOpened}
        setModal={setModalOpen}
        favoriteMovies={favoriteMovies}
        setFavoriteMovies={setFavoriteMovies}
        modalInfo={{id: Number(id), 'movie-name': title ? title : ''}}
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
