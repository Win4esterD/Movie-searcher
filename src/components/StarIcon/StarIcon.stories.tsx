import { StoryObj, Meta } from '@storybook/nextjs-vite';
import { StarIcon } from './StarIcon';
import { useState, Component } from 'react';

const meta = {
  component: StarIcon,
} satisfies Meta<typeof StarIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    id: 1,
    pointState: 0,
    clickHandler: (_: number) => {
      alert('The star was clicked');
    },
    mouseOverHandler: (_: number) => {},
  },
} satisfies Story;

export const PointState2 = {
  args: {
    ...Primary.args,
    pointState: 1,
  },
};

export const Interactive = {
  render: (args: any) => {
    const [starState, setStarState] = useState(0);

    return (
      <StarIcon
        {...args}
        id={3}
        pointState={starState}
        clickHandler={() => {
          alert('The star was clicked');
        }}
        mouseOverHandler={() => {
          setStarState(5);
        }}
      />
    );
  },
  args: {
    ...Primary.args,
  },
};
