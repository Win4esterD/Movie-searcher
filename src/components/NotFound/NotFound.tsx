import Image from 'next/image';
import { Box } from '@mantine/core';
import style from './NotFound.module.css';

export function NotFound(): JSX.Element {
  return (
    <Box className={style.notFoundBlock}>
      <Image
        src={'/assets/img/elements/empty-search.png'}
        alt="Not found"
        width={311}
        height={253}
      />
      <Box component="p" className={style.notFoundMessage}>
        We don't have such movies, look for another one
      </Box>
    </Box>
  );
}
