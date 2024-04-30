import {useEffect, useState} from 'react';

export function useDataFetcher(url: string, func: Function): any {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetching() {
      const result = await func(url);
      setData(result);
    }

    fetching();
  }, [url]);

  return data;
}
