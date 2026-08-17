import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { FavMoviesSection } from './FavMoviesSection';

const meta: Meta<typeof FavMoviesSection> = {
  component: FavMoviesSection,
};

export default meta;

type Story = StoryObj<typeof FavMoviesSection>;

export const Primary = {} satisfies Story;
