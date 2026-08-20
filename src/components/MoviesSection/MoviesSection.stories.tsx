import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MoviesSection } from './MoviesSection';
import { http, HttpResponse } from 'msw';

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
