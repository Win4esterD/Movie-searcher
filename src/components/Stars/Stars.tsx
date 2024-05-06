import Image from 'next/image';
import starUnlicked from '/public/assets/img/icons/starUnliked.svg';
import {Box} from '@mantine/core';
import style from './Stars.module.css'

export function Stars(): JSX.Element {
  return (
    <Box className={style.starsBlock}>
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
      <Image src={starUnlicked} alt="Star unliked" />
    </Box>
  );
}
