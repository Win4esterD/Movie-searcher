import {Text, Box} from '@mantine/core';
import style from './favorites.module.css';
import {FavMoviesSection} from '@/components';

export default function Favorites(): JSX.Element {
  return (
    <Box className={style.rightSection}>
      <Box className={style.contentBlock}>
        <Text fw={700} className={style.title}>
          Watched movies
        </Text>
        <FavMoviesSection />
      </Box>
    </Box>
  );
}
