import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { AsideTabs } from './AsideTabs';

const meta: Meta<typeof AsideTabs> = {
  component: AsideTabs,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;
