'use client';
import {Box, Flex, Text} from '@mantine/core';
import style from './MovieCard.module.css';
import Image from 'next/image';
import {posterBaseLink} from '@/utils';
import starUnliked from '/public/assets/img/icons/starUnliked.svg';
import starPurple from '/public/assets/img/icons/starPurple.svg';
import {Dispatch} from 'react';
import {favoriteMovie} from '@/types/favoriteMovie';
import {isMovieInFavorites} from '@/utils';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {MovieStatistics} from '../MovieStatistics/MovieStatistics';

type MovieCardProps = {
  imgLink: string;
  movieName: string;
  releaseDate: string;
  rating: number;
  votes: number;
  genreIds: Array<number>;
  genres: Array<{id: number; name: string}>;
  setModal: Dispatch<boolean>;
  setModalInfo: Dispatch<favoriteMovie>;
  id: number;
  favoriteMovies: Array<favoriteMovie>;
};

export function MovieCard({
  imgLink,
  movieName,
  releaseDate,
  rating,
  votes,
  genreIds,
  genres,
  setModal,
  setModalInfo,
  id,
  favoriteMovies,
}: MovieCardProps): JSX.Element {
  const genresToRender = genres
    ?.map(item => {
      if (genreIds?.includes(item.id)) {
        return item.name + ', ';
      }
    })
    .join('');

  const router = useRouter();

  function modalCaller() {
    setModalInfo({
      'movie-name': movieName,
      id: id,
      imgLink: imgLink,
      releaseDate: releaseDate,
      rating: rating,
      votes: votes,
      genreIds: genreIds,
      genres: genres,
      favoriteMovies: favoriteMovies,
    });
    setModal(true);
  }

  const inFavorites = isMovieInFavorites(favoriteMovies, id);

  return (
    <Box className={style.movieCard}>
      <Box className={style.rateMovie}>
        <Image
          src={!inFavorites ? starUnliked : starPurple}
          alt="Rate movie"
          onClick={modalCaller}
        />
        {typeof inFavorites === 'object' && (
          <Box component="span" className={style.userRating}>
            {inFavorites.rating}
          </Box>
        )}
      </Box>
      <Flex className={style.contentWrapper} gap="1rem">
        <Image
          src={`${posterBaseLink}${imgLink}`}
          alt={movieName ? movieName : 'Poster'}
          className={style.movieImage}
          width="119"
          height="170"
          priority
          onClick={() => router.push(`/movies/${id}`)}
        />
        <Box>
          <Link
            href={`/movies/${id}`}
            target="_blank"
            className={style.movieName}
          >
            {movieName}
          </Link>
          <Text className={style.year}>{releaseDate.split('-')[0]}</Text>
          <MovieStatistics rating={rating} votes={votes} />
          <Flex className={style.genresWrapper}>
            <Text className={style.genres}>Genres</Text>
            <Text>{genresToRender?.slice(0, genresToRender.length - 2)}</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
