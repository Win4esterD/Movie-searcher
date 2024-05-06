import Image from 'next/image';
import {Box} from '@mantine/core';
import notFoundImg from '/public/assets/img/elements/empty-search.png';
import style from './NotFound.module.css';

export function NotFound(): JSX.Element {
  return (
    <Box className={style.notFoundBlock}>
      <Image src={notFoundImg} alt="Not found" />
      <Box component="p" className={style.notFoundMessage}>
        We don't have such movies, look for another one
      </Box>
    </Box>
  );
}
