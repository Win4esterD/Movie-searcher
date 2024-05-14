import Image from 'next/image';
import emptyStateIMG from '/public/assets/img/elements/favoritesEmpty.png';
import {Flex, Text, Button} from '@mantine/core';
import style from './FavMoviesEmptyState.module.css';
import Link from 'next/link';

export function FavMoviesEmptyState() {
  return (
    <Flex className={style.emptyStateWrapper} direction="column" align="center">
      <Image
        src={emptyStateIMG}
        alt="Favorites not found"
        width="400"
        height="300"
      />
      <Text fw="600" size="xl">
        You haven't rated any films yet
      </Text>
      <Link href="/">
        <Button color="var(--main-purple)" className={style.button} radius="md">
          Find movies
        </Button>
      </Link>
    </Flex>
  );
}
