import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MoviesSection } from './MoviesSection';
import { http, HttpResponse } from 'msw';

const meta = {
  component: MoviesSection,
} satisfies Meta<typeof MoviesSection>;

export default meta;

type Story = StoryObj<typeof MoviesSection>;

// export const UserProfileNetworkError: Story = {
//   beforeEach({ msw }) {
//     msw.use(
//       http.get('https://api.acme.com/user', () => {
//         return HttpResponse.error();
//       }),
//     );
//   },
// };

const mockGenres = {
  genres: [
    { id: 28, name: 'Action' },
    { id: 35, name: 'Comedy' },
    { id: 18, name: 'Drama' },
  ],
};

const mockMovies = {
  page: 1,
  total_pages: 1,
  total_results: 1,
  results: [
    {
      id: 1,
      title: 'The Dark Knight',
      poster_path: '/rVr2Tdp2LcL3DheXUrVN345Myhg.jpg',
      release_date: '2008-07-18',
      vote_average: 9.0,
      vote_count: 2800000,
      genre_ids: [28, 35, 18],
    },
  ],
};

export const Primary = {
  args: {
    searchParams: {},
  },
  parameters: {
    msw: {
      handlers: [
        // intercept GET /api/genres/
        http.get('/api/genres/', () => {
          return HttpResponse.json(mockGenres);
        }),
        // intercept GET /api/movies/
        http.get('/api/movies/', () => {
          return HttpResponse.json(mockMovies);
        }),
      ],
    },
  },
} satisfies Story;
