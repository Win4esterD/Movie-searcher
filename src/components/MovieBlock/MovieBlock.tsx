import { Box } from "@mantine/core";
import style from './MovieBlock.module.css';
import Image from "next/image";
import { posterBaseLink } from "@/utils";

type movieBlockProps = {
  poster: string;
  title: string;
}

export function MovieBlock({poster, title}: movieBlockProps): JSX.Element {
  return (
    <Box className={style.movieBlock}>
      <Image src={posterBaseLink + poster} alt={title ? title : 'Poster'} width={250} height={352}/>
    </Box>
  );
}