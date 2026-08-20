import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { ModalWindow } from './ModalWindow';

const meta = {
  component: ModalWindow,
} satisfies Meta<typeof ModalWindow>;

export default meta;

type Story = StoryObj<typeof ModalWindow>;

const modalWindowDecorator = (Story: React.FC) => {
  return (
    <div>
      <Story />
    </div>
  );
};

export const Primary = {
  args: {
    isOpened: true,
    modalInfo: {
      'movie-name': 'The Dark Knight',
      id: 1,
      imgLink: '/qJ2tW6WMUDux911BTUgMe1nF6AF.jpg',
      releaseDate: '2008-07-18',
      rating: 3,
      votes: 2800000,
      genreIds: [28],
      genres: [{ id: 28, name: 'Action' }],
    },
    favoriteMovies: [],
    setModal: () => {},
    setFavoriteMovies: () => {},
  },
  decorators: [modalWindowDecorator],
} satisfies Story;
