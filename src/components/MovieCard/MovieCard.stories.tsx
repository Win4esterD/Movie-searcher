import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MovieCard } from './MovieCard';
import { ComponentProps } from 'react';
import type { favoriteMovie } from '@/types/favoriteMovie';

const meta = {
  component: MovieCard,
} satisfies Meta<typeof MovieCard>;

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


export const Primary = {
  args: {
    imgLink: '/6YIhiAzNB9PPgIPA04tD1xaSBMw.jpg',
    movieName: 'X-men 97',
    releaseDate: '2024-05-21',
    rating: 9,
    votes: 113,
    genres: [{ id: 6, name: 'action movie' }],
    setModal: (_: boolean) => {},
    setModalInfo: (_: favoriteMovie) => {},
    id: 15,
    favoriteMovies: mockMovies,
    genreIds: [28, 80, 18],
  } satisfies ComponentProps<typeof MovieCard>,
} satisfies Story;
