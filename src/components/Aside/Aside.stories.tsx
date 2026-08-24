import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { Aside } from './Aside';

const meta: Meta<typeof Aside> = {
  component: Aside,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
