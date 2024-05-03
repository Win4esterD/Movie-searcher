import {searchParams} from '@/types/searchPage';

export function searchParamsParser(
  searchParams: searchParams | undefined,
): string {
  if (searchParams) {
    const paramsArr = Object.entries(searchParams);
    let paramsStr = '?';
    paramsArr.forEach(item => (paramsStr += `${item[0]}=${item[1]}&`));
    return paramsStr;
  }
  return '';
}
