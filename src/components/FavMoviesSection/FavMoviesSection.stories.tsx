import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { FavMoviesSection } from './FavMoviesSection';
import { favoriteMovie } from '@/types/favoriteMovie';
import { useEffect } from 'react';

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

// Clear localStorage as loader, for empty state
const clearMoviesFromLocalStorage = async () => {
  localStorage.removeItem('movies');
  return {};
};

// Clear local storage on Story unmount
const ClearLocalStorageDecorator = (Story: React.FC) => {
  useEffect(() => {
    return () => {
      localStorage.removeItem('movies');
    };
  }, []);
  return <Story />;
};

const meta: Meta<typeof FavMoviesSection> = {
  component: FavMoviesSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  loaders: [setMoviesInLocalStorage],
  decorators: [ClearLocalStorageDecorator],
  render: () => <FavMoviesSection key="primary" />,
} satisfies Story;

export const Empty = {
  loaders: [clearMoviesFromLocalStorage],
  render: () => <FavMoviesSection key="empty" />,
} satisfies Story;
