import type {Metadata} from 'next';
import './globals.css';


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
      <body>{children}</body>
    </html>
  );
}
