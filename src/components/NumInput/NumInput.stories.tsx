import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { NumInput } from './NumInput';

const meta = {
  component: NumInput,
};

export default meta;

type Story = StoryObj<typeof NumInput>;

export const Primary = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    searchParams: {},
    direction: 'to',
  },
} satisfies Story;

export const NoLabel = {
  args: {
    ...Primary.args,
    label: undefined,
  },
} satisfies Story;

export const NoPlaceholder = {
  args: {
    ...Primary.args,
    placeholder: undefined,
  },
} satisfies Story;

export const FromDirection = {
  args: {
    ...Primary.args,
    direction: 'from',
  },
} satisfies Story;

export const WithSearchParamsAndDirectionTo = {
  args: {
    ...Primary.args,
    searchParams: {
      'vote_average.lte': '5',
    },
  },
} satisfies Story;

export const WithSearchParamsAndDirectionFrom = {
  args: {
    ...Primary.args,
    direction: 'from',
    searchParams: {
      'vote_average.gte': '7',
    },
  },
} satisfies Story;
