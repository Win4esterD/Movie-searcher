import {Box, Flex, Text, Button} from '@mantine/core';
import logo from '/public/assets/img/icons/logo.svg';
import errorMessage from '/public/assets/img/elements/errorMessage.png';
import Image from 'next/image';
import Link from 'next/link';
import style from './not-found.module.css';
import {poppins} from '../../public/assets/fonts';

export default function NotFound() {
  return (
    <Box component="main">
      <Flex className={style.logoAndName}>
        <Image src={logo} alt="logo" width={32} height={32} />
        <Link href="/" className={`${poppins.className} ${style.companyName}`}>
          ArrowFlicks
        </Link>
      </Flex>
      <Flex
        justify="center"
        direction="column"
        align="center"
        className={style.errorMessageWrapper}
      >
        <Image
          src={errorMessage}
          alt="Page not found"
          width="656"
          height="196"
        />
        <Text fw={600} size="xl" className={style.errorText}>
          We can’t find the page you are looking for
        </Text>
        <Link href="/">
          <Button
            className={style.button}
            color="var(--main-purple)"
            radius="md"
            size="sm"
          >
            Go Home
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
