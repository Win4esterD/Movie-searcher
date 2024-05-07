'use client';
import {Modal, Box, Divider, Button} from '@mantine/core';
import {Dispatch, useState} from 'react';
import style from './ModalWindow.module.css';
import {Stars} from '../Stars/Stars';
import { favoriteMovie } from '@/types/favoriteMovie';
import { changeFavoriteMovies } from '@/utils';

type ModalWindowProps = {
  modalInfo: {'movie-name': string; id: number};
  isOpened: boolean;
  setModal: Dispatch<boolean>;
  favoriteMovies: Array<favoriteMovie>;
  setFavoriteMovies: Dispatch<Array<favoriteMovie>>;
};

export function ModalWindow({
  modalInfo,
  isOpened,
  setModal,
  favoriteMovies,
  setFavoriteMovies,
}: ModalWindowProps) {
  const [rating, setRating] = useState<null | number>(null);

  function clickHandler() {
    if (rating) {
      setFavoriteMovies(
        changeFavoriteMovies(favoriteMovies, {
          'movie-name': modalInfo['movie-name'],
          id: modalInfo.id,
          rating: rating,
        }),
      );
    }
    setModal(false);
  }
  return (
    <Modal
      opened={isOpened}
      centered
      onClose={() => setModal(false)}
      title="Your rating"
      size="sm"
      overlayProps={{
        backgroundOpacity: 0.2,
      }}
    >
      <Box className={style.modalInnerContainer}>
        <Divider className={style.modalDivider} />
        <Box component="p" className={style.modalMovieName}>
          {modalInfo['movie-name']}
        </Box>
        <Stars modalInfo={modalInfo} setRating={setRating} rating={rating} />
        <Button
          color="var(--main-purple)"
          className={style.modalButton}
          onClick={clickHandler}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}
