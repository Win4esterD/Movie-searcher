import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { NotFound } from './NotFound';

const meta = {
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
