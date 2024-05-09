import {MoviesSection} from '@/components';
import {searchPageParams} from '@/types/searchPage';
import {Box} from '@mantine/core';
import style from './page.module.css';

export default function Home({searchParams}: searchPageParams): JSX.Element {
  return (
    <Box component="section" className={style.right}>
      <MoviesSection searchParams={searchParams} />
    </Box>
  );
}
