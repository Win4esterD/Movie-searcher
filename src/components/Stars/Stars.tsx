'use client';
import {Box} from '@mantine/core';
import style from './Stars.module.css';
import {StarIcon} from '../StarIcon/StarIcon';
import { Dispatch} from 'react';

type starsProps = {
  modalInfo: {
    id: number;
    'movie-name': string;
  };
  rating: number | null;
  setRating: Dispatch<number>;
  pointState: number;
  setPointerState: Dispatch<number>,
};

export function Stars({
  modalInfo,
  rating,
  setRating,
  pointState,
  setPointerState,
}: starsProps): JSX.Element {
  return (
    <Box className={style.starsBlock}>
      <StarIcon
        id={1}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={2}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={3}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={4}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={5}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={6}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={7}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={8}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={9}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
      <StarIcon
        id={10}
        pointState={pointState}
        setPointerState={setPointerState}
        rating={rating}
        setRating={setRating}
      />
    </Box>
  );
}
