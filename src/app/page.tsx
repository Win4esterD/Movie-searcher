import {MoviesSection} from '@/components';
import {searchPageParams} from '@/types/searchPage';
import {Box} from '@mantine/core';
import style from './page.module.css';
import {MoviesLayout} from '@/layouts';

export default function Home({searchParams}: searchPageParams): JSX.Element {
  return (
    <MoviesLayout>
      <Box component="section" className={style.right}>
        <MoviesSection searchParams={searchParams} />
      </Box>
    </MoviesLayout>
  );
}
