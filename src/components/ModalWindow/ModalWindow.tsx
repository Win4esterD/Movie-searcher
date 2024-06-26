'use client';
import {Modal, Box, Divider, Button} from '@mantine/core';
import {Dispatch, useState, useEffect} from 'react';
import style from './ModalWindow.module.css';
import {Stars} from '../Stars/Stars';
import {favoriteMovie} from '@/types/favoriteMovie';
import {changeFavoriteMovies} from '@/utils';

type ModalWindowProps = {
  modalInfo: favoriteMovie;
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
}: ModalWindowProps): JSX.Element {
  const [rating, setRating] = useState<null | number>(null);
  const [pointState, setPointerState] = useState(0);

  useEffect(() => {
    if (isOpened) {
      for (let item of favoriteMovies) {
        if (item.id === modalInfo.id) {
          setRating(item.rating);
          setPointerState(item.rating);
        }
      }
      return () => {
        setRating(null);
        setPointerState(0);
      };
    }
  }, [isOpened]);

  function clickHandler() {
    if (rating) {
      setFavoriteMovies(
        changeFavoriteMovies(favoriteMovies, {
          'movie-name': modalInfo['movie-name'],
          id: modalInfo.id,
          rating: rating,
          imgLink: modalInfo.imgLink,
          releaseDate: modalInfo.releaseDate,
          votes: modalInfo.votes,
          genreIds: modalInfo.genreIds,
          genres: modalInfo.genres,
        }),
      );
    }
    setModal(false);
  }

  function removeHandler() {
    const filteredFavorites = favoriteMovies.filter(
      item => item.id !== modalInfo.id,
    );
    setFavoriteMovies(filteredFavorites);
    setRating(null);
    setPointerState(0);
    // setModal(false);
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
        <Stars
          modalInfo={modalInfo}
          setRating={setRating}
          rating={rating}
          pointState={pointState}
          setPointerState={setPointerState}
        />
        <Button
          color="var(--main-purple)"
          className={style.modalButton}
          onClick={clickHandler}
        >
          Save
        </Button>
        {rating && (
          <Button
            variant="outline"
            color="var(--main-purple)"
            onClick={removeHandler}
            className={style.removeButton}
          >
            Remove
          </Button>
        )}
      </Box>
    </Modal>
  );
}
