import React from 'react';
import { MantineProvider } from '@mantine/core';

export const MantineDecorator = (Story: React.FC) => {
  return (
    <MantineProvider>
      <Story />
    </MantineProvider>
  );
};