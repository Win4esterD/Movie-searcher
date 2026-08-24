import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MovieBlock } from './MovieBlock';

const meta = {
  component: MovieBlock,
} satisfies Meta<typeof MovieBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    poster: '/6YIhiAzNB9PPgIPA04tD1xaSBMw.jpg',
    title: 'X-men 97',
    releaseDate: '2024-05-21',
    rating: 9,
    votes: 113,
    time: 387,
    budget: 3434656,
    revenue: 54535,
    genres: [{ id: 6, name: 'action movie' }],
    id: '15',
  },
} satisfies Story;

export const NoPoster = {
  args: {
    ...Primary.args,
    poster: undefined,
  },
} satisfies Story;

export const NoTitle = {
  args: {
    ...Primary.args,
    title: undefined,
  },
} satisfies Story;

export const NoRating = {
  args: {
    ...Primary.args,
    rating: undefined,
  },
} satisfies Story;

export const NoVotes = {
  args: {
    ...Primary.args,
    votes: undefined,
  },
} satisfies Story;

export const NoTime = {
  args: {
    ...Primary.args,
    time: undefined,
  },
} satisfies Story;

export const NoBudget = {
  args: {
    ...Primary.args,
    budget: undefined,
  },
} satisfies Story;

export const NoRevenue = {
  args: {
    ...Primary.args,
    revenue: undefined,
  },
} satisfies Story;

export const NoGenres = {
  args: {
    ...Primary.args,
    genres: undefined,
  },
} satisfies Story;

export const GenresEmptyArray = {
  args: {
    ...Primary.args,
    genres: [],
  },
} satisfies Story;

export const NoId = {
  args: {
    ...Primary.args,
    id: undefined,
  },
} satisfies Story;
