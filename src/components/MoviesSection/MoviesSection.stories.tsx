import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MoviesSection } from './MoviesSection';
import { http, HttpResponse } from 'msw';

const meta = {
  component: MoviesSection,
} satisfies Meta<typeof MoviesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    searchParams: {},
  },
} satisfies Story;

export const WithoutGenresFromAPI = {
  args: {
    searchParams: {},
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/api/genres/', () => {
          return HttpResponse.error();
        }),

        http.get('/api/movies/', () => {
          return HttpResponse.json({
            page: 1,
            results: [
              {
                adult: false,
                backdrop_path: '/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg',
                genre_ids: [28, 12, 878],
                id: 315635,
                title: 'Spider-Man: Homecoming',
                original_language: 'en',
                original_title: 'Spider-Man: Homecoming',
                overview:
                  'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
                popularity: 118.0399,
                poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
                release_date: '2017-07-05',
                softcore: false,
                video: false,
                vote_average: 7.333,
                vote_count: 23693,
              },
            ],
            total_pages: 1,
          });
        }),
      ],
    },
  },
} satisfies Story;

export const WithoutMoviesFromAPI = {
  args: {
    searchParams: {},
  },
  parameters: {
    msw: {
      handlers: [
        http.get('/api/genres', () => {
          return HttpResponse.json([
            {
              id: 10770,
              name: 'TV Movie',
            },
            {
              id: 53,
              name: 'Thriller',
            },
          ]);
        }),

        http.get('/api/movies', () => {
          return HttpResponse.json({
            message: 'Fuck you',
          });
        }),
      ],
    },
  },
} satisfies Story;
