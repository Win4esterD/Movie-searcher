import style from './MovieStatistics.module.css';
import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

type movieStatisticsProps = {
  rating?: number;
  votes?: number;
  styles?: React.CSSProperties;
};

export function MovieStatistics({
  rating,
  votes,
  styles,
}: movieStatisticsProps) {
  return (
    <Flex className={style.movieStatistics} style={Object.assign({}, styles)}>
      <Image
        src={'/assets/img/icons/star.svg'}
        alt="Rating icon"
        width={23.3}
        height={22.16}
      />
      <Flex className={style.ratingAndVotes}>
        <Text className={style.rating}>{rating?.toFixed(1)}</Text>
        <Text className={style.votes}>({votes})</Text>
      </Flex>
    </Flex>
  );
}
