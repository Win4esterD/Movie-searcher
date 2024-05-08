'use client';
import {useState, useEffect} from 'react';
import {useMoviesLink} from '@/hooks';
import {fetchData} from '@/services/client/fetchers';

export default function Movie({params}: {params: {id: string}}) {
  const [movieInfo, setMovieInfo] = useState('');
  useEffect(() => {
    async function fetch() {
      const link = location.origin + `/api/movie/?id=${params.id}`;
      const response = await fetchData(link);
      setMovieInfo(response);
    }
    fetch();
  }, []);

  console.log(movieInfo);
  return <p></p>;
}
