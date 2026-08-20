import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { RatingModalWindow } from './RatingModalWindow';
import type { favoriteMovie } from '@/types/favoriteMovie';
import { Button } from '@mantine/core';
import { useState } from 'react';
import { ComponentProps } from 'react';

const meta = {
  component: RatingModalWindow,
} satisfies Meta<typeof RatingModalWindow>;

export default meta;

type Story = StoryObj<typeof RatingModalWindow>;

const mockMovie: favoriteMovie = {
  'movie-name': 'The Dark Knight',
  id: 1,
  imgLink: '/qJ2tW6WMUDux911BTUgMe1nF6AF.jpg',
  releaseDate: '2008-07-18',
  rating: 3,
  votes: 2800000,
  genreIds: [28],
  genres: [{ id: 28, name: 'Action' }],
};

type RatingModalWindowProps = ComponentProps<typeof RatingModalWindow>;

const ModalWrapper = (props: RatingModalWindowProps) => {
  const [isOpened, setModal] = useState(false);
  const [favoriteMovie, setFavoriteMovie] = useState([mockMovie]);

  return (
    <div>
      <Button onClick={() => setModal(!isOpened)}>Open modal</Button>
      <RatingModalWindow
        {...props}
        isOpened={isOpened}
        setModal={setModal}
        favoriteMovies={favoriteMovie}
        setFavoriteMovies={setFavoriteMovie}
      />
    </div>
  );
};

export const Primary = {
  args: {
    isOpened: true,
    modalInfo: mockMovie,
    favoriteMovies: [mockMovie],
    setModal: () => {},
    setFavoriteMovies: () => {},
  },
} satisfies Story;

export const WindowNotOpened = {
  args: {
    ...Primary.args,
    isOpened: false,
  },
};

export const FavoriteMovieEmptyArray = {
  args: {
    ...Primary.args,
    favoriteMovies: [],
  },
};

export const Interactive = {
  render: (args: RatingModalWindowProps) => <ModalWrapper {...args} />,
  args: {
    modalInfo: mockMovie,
    favoriteMovies: [mockMovie],
    setFavoriteMovies: () => {},
  },
} satisfies Story;
