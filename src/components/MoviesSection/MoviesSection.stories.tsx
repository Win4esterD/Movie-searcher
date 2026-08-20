import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MoviesSection } from './MoviesSection';

const meta = {
  component: MoviesSection,
} satisfies Meta<typeof MoviesSection>;

export default meta;

type Story = StoryObj<typeof MoviesSection>;



export const Primary = {
  args: {
    searchParams: {},
  },
} satisfies Story;
