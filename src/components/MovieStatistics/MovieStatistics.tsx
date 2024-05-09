import style from './MovieStatistics.module.css';
import Image from 'next/image';
import {Flex, Text} from '@mantine/core';
import star from '/public/assets/img/icons/star.svg';

type movieStatisticsProps = {
  rating: number;
  votes: number;
  styles?: React.CSSProperties
};

export function MovieStatistics({rating, votes, styles}: movieStatisticsProps) {
  return (
    <Flex className={style.movieStatistics} style={Object.assign({}, styles)}>
      <Image src={star} alt="Rating icon" width={23.3} height={22.16} />
      <Flex className={style.ratingAndVotes}>
        <Text className={style.rating}>{rating.toFixed(1)}</Text>
        <Text className={style.votes}>({votes})</Text>
      </Flex>
    </Flex>
  );
}