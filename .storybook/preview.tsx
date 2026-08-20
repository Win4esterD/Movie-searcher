import type { Preview } from '@storybook/nextjs-vite';
import '@mantine/core/styles.css';
import '../src/app/globals.css';
import { MantineDecorator } from './decorators';
import { mswLoader } from 'msw-storybook-addon/csf3';


const preview = {
  parameters: {
    msw: [],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    nextjs: {
      appDirectory: true, // Включаем поддержку App Router
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [MantineDecorator],
  loaders: [mswLoader()],
} satisfies Preview;

export default preview;
