'use client';
import {NumberInput} from '@mantine/core';
import style from './NumInput.module.css';
import {searchParamsParser} from '@/utils';
import {searchParams} from '@/types/searchPage';
import {useRouter} from 'next/navigation';

type NumInputProps = {
  label?: string;
  placeholder?: string;
  filter?: string;
  searchParams: searchParams;
  direction?: 'from' | 'to';
};

export function NumInput({
  label,
  placeholder,
  searchParams,
  direction,
}: NumInputProps): JSX.Element {
  const router = useRouter();
  
  const defValue = direction === 'to' ? 'vote_average.lte' : 'vote_average.gte';

  function changeHandler(value: string | number) {
    const newSearchParams = structuredClone(searchParams);
    if (direction === 'to') {
      newSearchParams!['vote_average.lte' as keyof searchParams] =
        value.toString();
      const url = searchParamsParser(newSearchParams);
      router.push(url);
    } else {
      newSearchParams!['vote_average.gte' as keyof searchParams] =
        value.toString();
      const url = searchParamsParser(newSearchParams);
      router.push(url);
    }
  }

  return (
    <NumberInput
      className={style.numInput}
      label={label}
      style={{marginTop: label ? 0 : '1.8rem'}}
      placeholder={placeholder}
      size="md"
      radius="md"
      allowNegative={false}
      max={10}
      min={1}
      onChange={changeHandler}
      defaultValue={searchParams[defValue as keyof searchParams]}
    />
  );
}
