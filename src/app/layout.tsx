import type {Metadata} from 'next';
import './globals.css';
import {MantineProvider, createTheme} from '@mantine/core';
import {inter} from '../../public/assets/fonts';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: 'Movie Searcher',
  description: 'Search your favorite movies',
};

const theme = createTheme({
  /** Your theme override here */
});

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
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
