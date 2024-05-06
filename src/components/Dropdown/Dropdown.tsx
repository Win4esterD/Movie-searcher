'use client';
import {NativeSelect} from '@mantine/core';
import style from './Dropdown.module.css';
import vectorIMG from '/public/assets/img/icons/vector.svg';
import Image from 'next/image';
import {searchParams} from '@/types/searchPage';
import {searchParamsParser} from '@/utils';
import {useRouter} from 'next/navigation';
import {SyntheticEvent, useEffect, useState} from 'react';

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
  filter = '',
  searchParams,
}: dropdownProps): JSX.Element {
  const newData = structuredClone(data);
  newData?.unshift(placeholder);
  const router = useRouter();

  const [value, setValue] = useState<any>(searchParams[filter as keyof searchParams]);
  useEffect(() => {
    if (JSON.stringify(searchParams) === '{}') {
      setValue(placeholder);
    }
  }, [searchParams]);

  function changeHandler(e: SyntheticEvent) {
    const newSearchParams = structuredClone(searchParams);
    newSearchParams[filter as keyof searchParams] = (
      e.target as HTMLInputElement
    ).value;
    const link = searchParamsParser(newSearchParams);
    setValue(newSearchParams[filter as keyof searchParams]);
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
      value={value}
    />
  );
}
