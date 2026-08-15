import {MoviesSection} from '@/components';
import {searchPageParams} from '@/types/searchPage';
import {Box} from '@mantine/core';
import style from './page.module.css';
import {MoviesLayout} from '@/layouts';
import {headers} from 'next/headers';

export default function Home({searchParams}: searchPageParams): JSX.Element {
  const headersList = headers();
  const userCountry = headersList.get('x-vercel-ip-country');

  return (
    <MoviesLayout>
      <Box component="section" className={style.right}>
        <MoviesSection searchParams={searchParams} userCountry={userCountry} />
      </Box>
    </MoviesLayout>
  );
}
