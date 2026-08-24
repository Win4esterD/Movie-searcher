import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { Stars } from './Stars';
import { useState, ComponentProps } from 'react';

const meta = {
  component: Stars,
} satisfies Meta<typeof Stars>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: ComponentProps<typeof Stars> = {
  rating: 0,
  setRating: () => {},
  pointState: 0,
  setPointerState: () => {},
};

export const Primary = {
  render: () => {
    const [rating, setRating] = useState(0);
    const [pointState, setPointState] = useState(0);

    return (
      <Stars
        rating={rating}
        setRating={setRating}
        pointState={pointState}
        setPointerState={setPointState}
      />
    );
  },
  args: defaultArgs,
} satisfies Story;

export const PredefinedRating = {
  render: () => {
    const [rating, setRating] = useState(6);
    const [pointState, setPointState] = useState(6);

    return (
      <Stars
        rating={rating}
        setRating={setRating}
        pointState={pointState}
        setPointerState={setPointState}
      />
    );
  },
  args: defaultArgs,
} satisfies Story;
