'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute — don't refetch on every mount
      retry: 1, // retry failed requests once
      refetchOnWindowFocus: false, // don't refetch when tab regains focus
    },
  },
});

type TanStackProviderProps = {
  children: ReactNode;
};

export function TanStackProvider({ children }: TanStackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
