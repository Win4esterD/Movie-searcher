'use client';
import {NativeSelect, rem} from '@mantine/core';
import style from './Dropdown.module.css';
import vectorIMG from '/public/assets/img/icons/vector.svg';
import Image from 'next/image';
import { searchParams } from '@/types/searchPage';
import { searchParamsParser } from '@/utils';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

type dropdownProps = {
  label?: string;
  data?: Array<any>;
  placeholder?: string;
  filter?: string;
  searchParams: searchParams;
};

export function Dropdown({
  label,
  data,
  placeholder = '',
  filter='',
  searchParams,
}: dropdownProps): JSX.Element {

  const newData = structuredClone(data);
  newData?.unshift(placeholder);
  const router = useRouter();

  function changeHandler(e: SyntheticEvent) {
    const newSearchParams = structuredClone(searchParams);
    newSearchParams[filter as keyof searchParams] = (e.target as HTMLInputElement).value;
    const link = searchParamsParser(newSearchParams);
    router.push(link);
  }

  return (
    <NativeSelect
      className={style.dropdown}
      rightSection={<Image src={vectorIMG} alt="" />}
      label={label}
      style={{marginTop: label ? 0 : '1.8rem'}}
      data={newData}
      size="md"
      radius="md"
      onChange={changeHandler}
    />
  );
}
