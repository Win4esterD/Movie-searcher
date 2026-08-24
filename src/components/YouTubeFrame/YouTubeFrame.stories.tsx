import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { YouTubeFrame } from './YouTubeFrame';

const meta = {
  component: YouTubeFrame,
} satisfies Meta<typeof YouTubeFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    youtubeKey: 'dQw4w9WgXcQ',
  },
} satisfies Story;

export const NoKey = {
  args: {
    youtubeKey: '',
  },
} satisfies Story;

export const CustomCSS = {
  args: {
    youtubeKey: 'dQw4w9WgXcQ',
    css: {
      border: '5px solid red',
      backgroundColor: 'red'
    },
  },
} satisfies Story;
