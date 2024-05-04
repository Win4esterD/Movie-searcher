import { Dropdown } from "../Dropdown/Dropdown";

type GenresDropdown = {
  label?: string;
  data?: Array<{name: string, id: number}>;
  placeholder?: string;
};

export function GenresDropdown({data, placeholder=''}: GenresDropdown) {
  const genres = data?.map((genre) => {
    return {label: genre.name, value: genre.id.toString()}
  })
  return <Dropdown placeholder={placeholder} data={genres} />;
}