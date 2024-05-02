import style from './page.module.css';
import {Box} from '@mantine/core';
import {Aside, MoviesSection} from '@/components';
import { searchPageParams } from '@/types/searchPage';


export default function Home({searchParams}: searchPageParams): JSX.Element {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        <Box component="section" className={style.right}>
          <MoviesSection searchParams={searchParams} />
        </Box>
      </Box>
    </main>
  );
}
