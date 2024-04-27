import style from './page.module.css';
import {Box} from '@mantine/core';
import { Aside } from '@/components';

export default function Home() {
  return (
    <main>
      <Box className={style.container}>
        <Aside />
        <Box component="section" className={style.right}></Box>
      </Box>
    </main>
  );
}
