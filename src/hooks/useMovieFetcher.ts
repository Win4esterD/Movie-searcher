import {useEffect, useState} from 'react';
import {searchParamsParser} from '@/utils';
import {searchParams} from '@/types/searchPage';

export function useMovieFetcher(
  url: string,
  func: Function,
  params?: searchParams,
): any {
  const [data, setData] = useState(false);

  let paramsStr = searchParamsParser(params);

  useEffect(() => {
    async function fetching() {
      setData(false);
      const result = await func(`${url}/${paramsStr}`);
      setData(result);
    }

    fetching();
  }, [url, paramsStr]);

  return data;
}
