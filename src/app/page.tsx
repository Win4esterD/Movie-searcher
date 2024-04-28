import style from './page.module.css';
import {Box, Container} from '@mantine/core';
import {Aside, RightSection, SearchInput} from '@/components';

export default function Home(): JSX.Element {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        <RightSection>
          <Box component="section" className={style.right}>
            <Box className={style.searchContainer}>
              <Box className={style.movies}>Movies</Box>
              <SearchInput />
            </Box>
          </Box>
        </RightSection>
      </Box>
    </main>
  );
}
