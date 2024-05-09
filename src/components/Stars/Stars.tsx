'use client';
import {Box} from '@mantine/core';
import style from './Stars.module.css';
import {StarIcon} from '../StarIcon/StarIcon';
import {Dispatch} from 'react';

type starsProps = {
  modalInfo: {
    id: number;
    'movie-name': string;
  };
  rating: number | null;
  setRating: Dispatch<number>;
  pointState: number;
  setPointerState: Dispatch<number>;
};

export function Stars({
  rating,
  setRating,
  pointState,
  setPointerState,
}: starsProps): JSX.Element {
  function highlightStars(id: number) {
    !rating && setPointerState(id);
  }

  function setRatingInStars(id: number) {
    setRating(id);
    setPointerState(id);
  }
  return (
    <Box className={style.starsBlock}>
      <StarIcon
        id={1}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={2}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={3}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={4}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={5}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={6}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={7}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={8}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={9}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
      <StarIcon
        id={10}
        pointState={pointState}
        mouseOverHandler={highlightStars}
        clickHandler={setRatingInStars}
      />
    </Box>
  );
}
