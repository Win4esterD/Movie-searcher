import {Box, Button, Container} from '@mantine/core';
import style from './SearchInput.module.css';
import searchImg from '/public/assets/img/icons/search.svg';
import Image from 'next/image';

export function SearchInput() {
  return (
    <Box className={style.inputWrapper}>
      <Image src={searchImg} alt="search icon" className={style.image}/>
      <input
        placeholder="Search movie title"
        className={style.searchInput}
      ></input>
      <Button className={style.button}>Search</Button>
    </Box>
  );
}
