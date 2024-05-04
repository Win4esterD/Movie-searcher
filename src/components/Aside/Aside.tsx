import {Box, Flex} from '@mantine/core';
import style from './Aside.module.css';
import logo from '/public/assets/img/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import {poppins} from '../../../public/assets/fonts';
import {AsideTabs} from '../AsideTabs/AsideTabs';

export function Aside(): JSX.Element {
  return (
    <Box component="aside" className={style.aside}>
      <Flex className={style.logoAndName}>
        <Image src={logo} alt="logo" width={32} height={32} />
        <Link href="/" className={`${poppins.className} ${style.companyName}`}>
          ArrowFlicks
        </Link>
      </Flex>
      <AsideTabs />
    </Box>
  );
}
