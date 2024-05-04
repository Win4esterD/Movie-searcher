import {NativeSelect, rem} from '@mantine/core';
import style from './Dropdown.module.css';
import vectorIMG from '/public/assets/img/icons/vector.svg';
import Image from 'next/image';
import { ReactNode } from 'react';

type dropdownProps = {
  label?: string;
  data?: Array<any>;
  placeholder?: string;
};

export function Dropdown({label, data, placeholder='',}: dropdownProps): JSX.Element {
  const newData = structuredClone(data);
  newData?.unshift(placeholder)
  
  return (
    <NativeSelect
      className={style.dropdown}
      rightSection={<Image src={vectorIMG} alt="" />}
      label={label}
      style={{marginTop: label ? 0 : '1.8rem'}}
      data={newData}
      size="md"
      radius="md"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
