'use client';
import style from './AsideTabs.module.css';
import {Box, Flex} from '@mantine/core';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

const selectedTabStyle = {
  color: 'var(--main-purple)',
  fontWeight: '700',
  backgroundColor: 'var(--alt-purple)',
};

export function AsideTabs(): JSX.Element {
  const pathName = location.pathname;
  const [selected, setSelected] = useState<Number>(pathName !== "/favorites"? 1: 2);
  const router = useRouter();
  return (
    <Flex className={style.tabsWrapper} direction="column">
      <Box
        className={style.tab}
        style={selected === 1 ? selectedTabStyle : {}}
        onClick={() => {
          router.push('/');
          setSelected(1);
        }}
      >
        Movies
      </Box>
      <Box
        className={style.tab}
        style={selected === 2 ? selectedTabStyle : {}}
        onClick={() => {
          router.push('/favorites')
          setSelected(2);
        }}
      >
        Rated movies
      </Box>
    </Flex>
  );
}
