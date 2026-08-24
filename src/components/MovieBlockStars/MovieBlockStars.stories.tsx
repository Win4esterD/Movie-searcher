import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MovieBlockStars } from './MovieBlockStars';
import type { favoriteMovie } from '@/types/favoriteMovie';
import { useEffect } from 'react';

const meta = {
  component: MovieBlockStars,
} satisfies Meta<typeof MovieBlockStars>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockMovies: favoriteMovie[] = [
  {
    id: 1,
    'movie-name': 'The Shawshank Redemption',
    rating: 5,
    imgLink: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    releaseDate: '1994-09-23',
    votes: 2500000,
    genreIds: [18, 80],
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
  },
  {
    id: 2,
    'movie-name': 'The Dark Knight',
    rating: 4,
    imgLink: '/rVr2Tdp2LcL3DheXUrVN345Myhg.jpg',
    releaseDate: '2008-07-18',
    votes: 2800000,
    genreIds: [28, 80, 18],
    genres: [
      { id: 28, name: 'Action' },
      { id: 80, name: 'Crime' },
      { id: 18, name: 'Drama' },
    ],
  },
];

const setMoviesInLocalStorage = async () => {
  localStorage.setItem('movies', JSON.stringify(mockMovies));
  return {};
};

const ClearLocalStorageDecorator = (Story: React.FC) => {
  useEffect(() => {
    return () => {
      localStorage.removeItem('movies');
    };
  }, []);
  return <Story />;
};

export const Primary = {
  args: {
    poster: '/6YIhiAzNB9PPgIPA04tD1xaSBMw.jpg',
    title: 'X-men 97',
    releaseDate: '2024-05-21',
    rating: 9,
    votes: 113,
    genres: [1],
    id: '15',
  },
  loaders: [setMoviesInLocalStorage],
  render: (args) => <MovieBlockStars key="primary" {...args} />,
  decorators: [ClearLocalStorageDecorator],
} satisfies Story;
