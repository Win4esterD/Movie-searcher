import type { Preview } from '@storybook/nextjs-vite';
import '@mantine/core/styles.css';
import '../src/app/globals.css';
import { MantineDecorator } from './decorators';

const preview = {
  parameters: {
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
} satisfies Preview;

export default preview;
