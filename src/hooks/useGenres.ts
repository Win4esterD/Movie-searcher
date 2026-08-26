import { useEffect, useState } from 'react';
import { fetchGenres } from '@/services';
import type { GenreType } from '@/types/GenreType';

import { useQuery } from '@tanstack/react-query';


export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    select: (data) => data.genres,
    staleTime: Infinity,
  });
}
