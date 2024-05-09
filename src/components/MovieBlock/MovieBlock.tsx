import {Box, Text, Flex} from '@mantine/core';
import style from './MovieBlock.module.css';
import Image from 'next/image';
import {posterBaseLink} from '@/utils';
import {MovieStatistics} from '../MovieStatistics/MovieStatistics';
import {monthDictionary} from '@/utils';
import {monthDictionaryType} from '@/utils/monthDictionary';
import { MovieBlockStars } from '../MovieBlockStars/MovieBlockStars';

type movieBlockProps = {
  poster?: string;
  title?: string;
  releaseDate?: string;
  rating?: number;
  votes?: number;
  time?: number;
  budget?: number;
  revenue?: number;
  genres?: Array<{id: number; name: string}>;
  id?: string;
};

export function MovieBlock({
  poster,
  title,
  releaseDate,
  rating,
  votes,
  time,
  budget,
  revenue,
  genres,
  id,
}: movieBlockProps): JSX.Element {
  const dateSplited = releaseDate && releaseDate.split('-');
  const month =
    dateSplited && monthDictionary[dateSplited[1] as keyof monthDictionaryType];
  const day = dateSplited && dateSplited[2];
  const year = dateSplited && dateSplited[0];
  let genreString = '';
  genres?.forEach((item, index, array) => {
    if(index < array.length - 1) {
      genreString += item.name + ', ';
    } else {
      genreString += item.name;
    }
  });
  return (
    <Box className={style.movieBlock}>
      <MovieBlockStars id={id} title={title? title: ''}/>
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
            {releaseDate?.split('-')[0]}
          </Text>
          <MovieStatistics
            rating={rating}
            votes={votes}
            styles={{marginTop: '0.6rem', paddingLeft: '0.2rem'}}
          />
          <Flex className={style.otherStats}>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Duration</Text>
              <Text>
                {time &&
                  `${Math.floor(time / 60)}h ${time % 60 > 9 ? time % 60 : '0' + (time % 60)}m`}
              </Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Premiere</Text>
              <Text>{`${month} ${day}, ${year}`}</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Budget</Text>
              <Text>${budget?.toLocaleString('en-US')}</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Gross worldwide</Text>
              <Text>${revenue?.toLocaleString('en-US')}</Text>
            </Flex>
            <Flex className={style.otherStatsDistance}>
              <Text className={style.otherStatisticName}>Genres</Text>
              <Text>{genreString}</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
