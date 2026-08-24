import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { MovieStatistics } from './MovieStatistics';

const meta = {
  component: MovieStatistics,
} satisfies Meta<typeof MovieStatistics>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    rating: 9,
    votes: 15,
    styles: {
      marginTop: '1rem',
    },
  },
} satisfies Story;

export const NoStyles = {
  args: {
    ...Primary.args,
    styles: undefined,
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

export const HugeAmountOfVotes = {
  args: {
    ...Primary.args,
    votes: 45234523452345,
  },
} satisfies Story;

