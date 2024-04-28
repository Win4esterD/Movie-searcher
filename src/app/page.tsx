import style from './page.module.css';
import {Box, Flex, NumberInput} from '@mantine/core';
import {
  Aside,
  RightSection,
  SearchInput,
  Dropdown,
  NumInput,
} from '@/components';

export default function Home(): JSX.Element {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        <Box component="section" className={style.right}>
          <Box className={style.searchContainer}>
            <Box className={style.movies}>Movies</Box>
            <SearchInput />
          </Box>
          <Flex
            component="section"
            className={style.inputsSection}
            justify="space-between"
            wrap="wrap"
          >
            <Dropdown />
            <Dropdown label="Release year" data={['Select release year']} />
            <NumInput label="Ratings" placeholder="From" />
            <NumInput placeholder="To" />
            <Box component="span" className={style.resetFilters}>
              Reset filters
            </Box>
          </Flex>
          <Box className={style.sortInputWrapper}>
            <Dropdown label="Sort by" data={['Most popular']} />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
