'use client';
import {Box, Button, Container} from '@mantine/core';
import style from './SearchInput.module.css';
import searchImg from '/public/assets/img/icons/search.svg';
import Image from 'next/image';
import {searchPageParams} from '@/types/searchPage';
import { useRouter } from 'next/navigation';
import { searchParamsParser } from '@/utils';
import { KeyboardEvent, useState } from 'react';

export function SearchInput({searchParams}: searchPageParams) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  function searchHandler() {
    const newParams = structuredClone(searchParams);
    newParams.query = searchQuery;
    newParams.page = '1';
    let params = searchParamsParser(newParams);
    router.push(`${params}`);
  }

  function onKeyUpSearch(e: KeyboardEvent) {
    if(e.key === "Enter") {
      searchHandler();
    }
  }

  return (
    <Box className={style.inputWrapper}>
      <Image src={searchImg} alt="search icon" className={style.image} />
      <input
        placeholder="Search movie title"
        className={style.searchInput}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyDown={onKeyUpSearch}
      ></input>
      <Button
        className={style.button}
        variant="filled"
        color="var(--main-purple)"
        onClick={searchHandler}
      >
        Search
      </Button>
    </Box>
  );
}
