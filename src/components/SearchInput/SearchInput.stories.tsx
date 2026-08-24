import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { SearchInput } from './SearchInput';

const meta = {
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    searchParams: {},
  },
} satisfies Story;
