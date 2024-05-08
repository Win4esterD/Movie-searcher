import {Box, Text} from '@mantine/core';
import {fetchData} from '@/services/client/fetchers';
import style from './movies.module.css';
import { MovieBlock } from '@/components';

export default async function Movie({params}: {params: {id: string}}) {
  const link = process.env.__NEXT_PRIVATE_ORIGIN;
  const movieInfo = await fetchData(`${link}/api/movie/?id=${params.id}`);

  return (
    <Box className={style.right}>
      <Box className={style.contentContainer}>
        <Text size="sm" c="var(--main-purple)" className={style.movieName}>
          {movieInfo?.title}
        </Text>
        <MovieBlock poster={movieInfo?.poster_path} title={movieInfo?.title} />
      </Box>
    </Box>
  );
}
