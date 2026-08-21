import {NumInput} from '../NumInput/NumInput';
import {searchPageParams} from '@/types/searchPage';

export function RatingInputs({searchParams}: searchPageParams): JSX.Element {
  return (
    <>
      <NumInput
        label="Ratings"
        placeholder="From"
        searchParams={searchParams}
        direction="from"
      />
      <NumInput
        placeholder="To"
        searchParams={searchParams}
        direction="to"
      />
    </>
  );
}
