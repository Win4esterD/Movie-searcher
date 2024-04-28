'use client';
import style from './AsideTabs.module.css';
import {Box, Flex} from '@mantine/core';
import {useState} from 'react';

const selectedTabStyle = {
  color: 'var(--main-purple)',
  fontWeight: '700',
  backgroundColor: 'var(--alt-purple)',
};

export function AsideTabs(): JSX.Element {
  const [selected, setSelected] = useState<Number>(1);
  return (
    <Flex className={style.tabsWrapper}>
      <Box
        className={style.tab}
        style={selected === 1 ? selectedTabStyle : {}}
        onClick={() => setSelected(1)}
      >
        Movies
      </Box>
      <Box
        className={style.tab}
        style={selected === 2 ? selectedTabStyle : {}}
        onClick={() => setSelected(2)}
      >
        Rated movies
      </Box>
    </Flex>
  );
}
