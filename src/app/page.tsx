import {MoviesSection} from '@/components';
import {searchPageParams} from '@/types/searchPage';

export default function Home({searchParams}: searchPageParams): JSX.Element {
  return <MoviesSection searchParams={searchParams} />;
}
