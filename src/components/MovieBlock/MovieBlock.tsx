import {Box, Text, Flex} from '@mantine/core';
import style from './MovieBlock.module.css';
import Image from 'next/image';
import {posterBaseLink} from '@/utils';
import { MovieStatistics } from '../MovieStatistics/MovieStatistics';

type movieBlockProps = {
  poster: string;
  title: string;
  releaseDate: string;
  rating: number;
  votes: number;
};

export function MovieBlock({
  poster,
  title,
  releaseDate,
  rating,
  votes,
}: movieBlockProps): JSX.Element {
  return (
    <Box className={style.movieBlock}>
      <Box className={style.innerBlockContent}>
        <Image
          src={posterBaseLink + poster}
          alt={title ? title : 'Poster'}
          width={250}
          height={352}
        />
        <Box className={style.movieDescription}>
          <Text
            c="var(--main-purple)"
            size="xl"
            fw={600}
            className={style.title}
          >
            {title}
          </Text>
          <Text c="var(--main-grey)" className={style.year}>
            {releaseDate.split('-')[0]}
          </Text>
          <MovieStatistics
            rating={rating}
            votes={votes}
            styles={{marginTop: '0.6rem', paddingLeft: '0.2rem'}}
          />
          <Flex className={style.otherStats}>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Duration</Text>
              <Text>3h 09m</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Premiere</Text>
              <Text>December 6, 1999</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Budget</Text>
              <Text>$125,000,000</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Gross worldwide</Text>
              <Text>$760,006,945</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Genres</Text>
              <Text>Dramma, Crime, Fantasy</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
