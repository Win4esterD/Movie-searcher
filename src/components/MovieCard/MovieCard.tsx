'use client';
import {Box, Flex, Text} from '@mantine/core';
import style from './MovieCard.module.css';
import Image from 'next/image';
import {posterBaseLink} from '@/utils';
import star from '/public/assets/img/icons/star.svg';
import starUnliked from '/public/assets/img/icons/starUnliked.svg';

type MovieCardProps = {
  imgLink: string;
  movieName: string;
  releaseDate: string;
  rating: number;
  votes: number;
  genreIds: Array<number>;
  genres: Array<{id: number; name: string}> | undefined;
};

export function MovieCard({
  imgLink,
  movieName,
  releaseDate,
  rating,
  votes,
  genreIds,
  genres,
}: MovieCardProps): JSX.Element {
  const genresToRender = genres
    ?.map(item => {
      if (genreIds?.includes(item.id)) {
        return item.name + ', ';
      }
    })
    .join('');
  return (
    <Box className={style.movieCard}>
      <Image src={starUnliked} alt="Rate movie" className={style.rateMovie} />
      <Flex className={style.contentWrapper} gap="1rem">
        <Image
          src={`${posterBaseLink}${imgLink}`}
          alt={movieName? movieName: "Poster"}
          className={style.movieImage}
          width="119"
          height="170"
          priority
        />
        <Box>
          <Text className={style.movieName}>{movieName}</Text>
          <Text className={style.year}>{releaseDate?.slice(0, 4)}</Text>
          <Flex className={style.movieStatistics}>
            <Image src={star} alt="Rating icon" width={23.3} height={22.16} />
            <Flex className={style.ratingAndVotes}>
              <Text className={style.rating}>{rating.toFixed(1)}</Text>
              <Text className={style.votes}>({votes})</Text>
            </Flex>
          </Flex>
          <Flex className={style.genresWrapper}>
            <Text className={style.genres}>Genres</Text>
            <Text>{genresToRender?.slice(0, genresToRender.length - 2)}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
