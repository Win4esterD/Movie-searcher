import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { FavMoviesEmptyState } from './FavMoviesEmptyState';

const meta: Meta<typeof FavMoviesEmptyState> = {
  component: FavMoviesEmptyState,
};

export default meta;

type Story = StoryObj<typeof FavMoviesEmptyState>;

export const Primary = {} satisfies Story;