import {useEffect, useState} from 'react';
import { searchParamsParser } from '@/utils';
import { searchParams } from '@/types/searchPage';

export function useDataFetcher(
  url: string,
  func: Function,
  params?: searchParams,
): any {
  const [data, setData] = useState();

  let paramsStr = searchParamsParser(params);

  useEffect(() => {
    async function fetching() {
      const result = await func(`${url}/${paramsStr}`);
      setData(result);
    }

    fetching();
  }, [url, paramsStr]);

  return data;
}
