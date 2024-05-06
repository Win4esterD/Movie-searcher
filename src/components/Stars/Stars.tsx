import {Box} from '@mantine/core';
import style from './Stars.module.css';
import {Star} from '../StarIcon/StarIcon';

export function Stars(): JSX.Element {
  return (
    <Box className={style.starsBlock}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Box>
  );
}
