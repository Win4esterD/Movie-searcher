'use client';
import {NativeSelect, createTheme, NumberInput} from '@mantine/core';

export const theme = createTheme({
  components: {
    NativeSelect: NativeSelect.extend({
      styles: {
        label: {
          fontWeight: 700,
          fontSize: '1rem',
          paddingLeft: '0.3rem',
          paddingBottom: '0.4rem',
        },
      },
    }),
    NumberInput: NumberInput.extend({
      styles: {
        label: {
          fontWeight: 700,
          fontSize: '1rem',
          paddingBottom: '0.3rem',
          paddingLeft: '0.4rem',
        },
      },
    }),
  },
});
