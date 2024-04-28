import {NumberInput} from '@mantine/core';
import style from './NumInput.module.css';

type NumInputProps = {
  label?: string;
  placeholder?: string;
};

export function NumInput({label, placeholder}: NumInputProps): JSX.Element {
  return (
    <NumberInput
      className={style.numInput}
      label={label}
      style={{marginTop: label ? 0 : '1.8rem'}}
      placeholder={placeholder}
      size="md"
      radius="md"
      allowNegative={false}
    />
  );
}
