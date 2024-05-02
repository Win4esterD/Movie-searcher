import {useEffect, useState} from 'react';

export function useDataFetcher(url: string, func: Function, params = {}): any {
  const [data, setData] = useState();
  const paramsArr = Object.entries(params);
  let paramsStr = '?';
  paramsArr.forEach(item => (paramsStr += `${item[0]}=${item[1]}&`));
  useEffect(() => {
    async function fetching() {
      const result = await func(`${url}/${paramsStr}`);
      setData(result);
    }

    fetching();
  }, [url, paramsStr]);

  return data;
}
