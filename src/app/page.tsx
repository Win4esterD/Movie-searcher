import style from './page.module.css';
import {Box} from '@mantine/core';
import {Aside, MoviesSection} from '@/components';

export default function Home(): JSX.Element {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        <Box component="section" className={style.right}>
          <MoviesSection />
        </Box>
      </Box>
    </main>
  );
}
