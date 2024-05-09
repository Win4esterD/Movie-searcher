import type {Metadata} from 'next';
import './globals.css';
import {MantineProvider, Box} from '@mantine/core';
import {inter} from '../../public/assets/fonts';
import '@mantine/core/styles.css';
import {theme} from '@/theme/theme';
import style from './layout.module.css';
import {Aside} from '@/components';

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
        <MantineProvider theme={theme}>
          <main>
            <Box className={style.container}>
              <Aside />
                {children}
            </Box>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
