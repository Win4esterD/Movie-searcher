import {NativeSelect, rem} from '@mantine/core';
import {IconChevronDown} from '@tabler/icons-react';
import style from './Dropdown.module.css';
import vectorIMG from '/public/assets/img/icons/vector.svg';
import Image from 'next/image';

type dropdownProps = {
  label?: string;
  data?: Array<string>;
};

export function Dropdown({label, data}: dropdownProps): JSX.Element {
  return (
    <NativeSelect
      className={style.dropdown}
      rightSection={<Image src={vectorIMG} alt="" />}
      label={label}
      style={{marginTop: label ? 0 : '1.8rem'}}
      data={data}
      size="md"
      radius="md"
    />
  );
}