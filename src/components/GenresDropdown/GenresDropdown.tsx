import {searchParams} from '@/types/searchPage';
import {Dropdown} from '../Dropdown/Dropdown';

type GenresDropdown = {
  label?: string;
  data?: Array<{name: string; id: number}>;
  placeholder?: string;
  searchParams: searchParams;
};

export function GenresDropdown({
  data,
  placeholder = '',
  searchParams,
}: GenresDropdown) {
  const genres = data?.map(genre => {
    return {label: genre.name, value: genre.id.toString()};
  });
  return (
    <Dropdown
      placeholder={placeholder}
      data={genres}
      filter="with_genres"
      searchParams={searchParams}
    />
  );
}
