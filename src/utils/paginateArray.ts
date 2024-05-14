import { favoriteMovie } from "@/types/favoriteMovie";

export function paginateArray(arr: favoriteMovie[], size: number) {
  let subarray = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarray[i] = arr.slice(i * size, (i + 1) * size);
  }

  return subarray;
}