import type { Metadata } from 'next';
import './globals.css';
import { MantineProvider } from '@mantine/core';
import { inter } from '../fonts';
import '@mantine/core/styles.css';
import { theme } from '@/theme/theme';
import { TanStackProvider } from '@/providers/TanStackProvider';

export const metadata: Metadata = {
  title: 'Movie Searcher',
  description: 'Search your favorite movies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <TanStackProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
