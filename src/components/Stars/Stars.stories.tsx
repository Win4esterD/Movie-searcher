import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { Stars } from './Stars';
import { useState } from 'react';

const meta = {
  component: Stars,
} satisfies Meta<typeof Stars>;

export default meta;

type Story = StoryObj<typeof Stars>;

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
} satisfies Story;
