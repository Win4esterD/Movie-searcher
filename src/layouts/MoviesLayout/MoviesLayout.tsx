import {Box} from '@mantine/core';
import {Aside} from '@/components';
import style from './MovieLayout.module.css';

export function MoviesLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        {children}
      </Box>
    </main>
  );
}
