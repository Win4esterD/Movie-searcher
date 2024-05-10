import {Box, Divider, Text, Flex} from '@mantine/core';
import {fetchData} from '@/services/client/fetchers';
import style from './movies.module.css';
import {MovieBlock, YouTubeFrame} from '@/components';
require('events').EventEmitter.defaultMaxListeners = 15;
import {getMovieTrailer} from '@/utils';
import {logoBaseURL} from '@/utils/urls';
import Image from 'next/image';
import {movie} from '@/types/movie';

export default async function Movie({params}: {params: {id: string}}) {
  let link;

  if (process.env.__NEXT_PRIVATE_ORIGIN) {
    link = process.env.__NEXT_PRIVATE_ORIGIN;
  } else {
    link = 'https://movie-searcher-brown.vercel.app';
  }
  const movieInfo: movie = await fetchData(
    `${link}/api/movie/?id=${params.id}`,
  );
  const videos = movieInfo?.videos?.results;
  const trailer = getMovieTrailer(videos);

  return (
    <Box className={style.right}>
      <Box className={style.contentContainer}>
        <Text size="sm" c="var(--main-purple)" className={style.movieName}>
          {movieInfo?.title}
        </Text>
        <MovieBlock
          poster={movieInfo?.poster_path}
          title={movieInfo?.title}
          releaseDate={movieInfo?.release_date}
          rating={movieInfo?.vote_average}
          votes={movieInfo?.vote_count}
          time={movieInfo?.runtime}
          budget={movieInfo?.budget}
          revenue={movieInfo?.revenue}
          genres={movieInfo?.genres}
          id={params?.id}
        />

        <Box className={style.descriptionBlock}>
          <Box className={style.descriptionBlockContent}>
            <Text fw={700} size="xl" className={style.trailer}>
              Trailer
            </Text>
            <YouTubeFrame
              youtubeKey={trailer ? trailer : ''}
              css={{position: 'relative', left: '0.3rem'}}
            />
            <Divider
              color="var(--alt-grey)"
              className={`${style.dividerIdent} ${style.divider}`}
            />
            <Text fw={700} size="xl" className={style.descriptionCaption}>
              Description
            </Text>
            <Text className={style.overview}>{movieInfo?.overview}</Text>
            <Divider
              color="var(--alt-grey)"
              className={`${style.dividerIdent} ${style.divider}`}
            />
            <Text fw={700} size="xl" className={style.productionCaption}>
              Production
            </Text>
            <Flex
              direction="column"
              gap="0.75rem"
              className={style.productCompaniesWrapper}
            >
              {movieInfo?.production_companies &&
                movieInfo.production_companies.map(item => {
                  return (
                    <Flex gap="0.5rem">
                      <Image
                        src={logoBaseURL + item.logo_path}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                      <Text fw={700} className={style.productionCompany}>
                        {item.name}
                      </Text>
                    </Flex>
                  );
                })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
