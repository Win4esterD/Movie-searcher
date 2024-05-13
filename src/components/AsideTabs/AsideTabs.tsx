'use client';
import style from './AsideTabs.module.css';
import {Box, Flex} from '@mantine/core';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

const selectedTabStyle = {
  color: 'var(--main-purple)',
  fontWeight: '700',
  backgroundColor: 'var(--alt-purple)',
};

export function AsideTabs(): JSX.Element {
  const [selected, setSelected] = useState<Number>(0);

  useEffect(() => {
    const pathName = window.location.pathname;
    setSelected(pathName !== '/favorites' ? 1 : 2);
  }, [])
  return (
    <Flex className={style.tabsWrapper} direction="column">
      <Link
        className={style.tab}
        style={selected === 1 ? selectedTabStyle : {}}
        href="/"
        onClick={() => {
          setSelected(1);
        }}
      >
        Movies
      </Link>
      <Link
        className={style.tab}
        href="/favorites"
        style={selected === 2 ? selectedTabStyle : {}}
        onClick={() => {
          setSelected(2);
        }}
      >
        Rated movies
      </Link>
    </Flex>
  );
}
