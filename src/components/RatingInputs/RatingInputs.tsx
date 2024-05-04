import {NumInput} from '../NumInput/NumInput';
import { searchPageParams } from '@/types/searchPage';

export function RatingInputs({searchParams}: searchPageParams): JSX.Element {
  return (
    <>
      <NumInput
        label="Ratings"
        placeholder="From"
        filter="vote_average.lte"
        searchParams={searchParams}
        direction="from"
      />
      <NumInput
        placeholder="To"
        filter="vote_average.gte"
        searchParams={searchParams}
        direction="to"
      />
    </>
  );
}
