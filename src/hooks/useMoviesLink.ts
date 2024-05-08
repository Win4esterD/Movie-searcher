import { useState, useEffect } from "react";

export function useMoviesLink(url='') {
  const [link, setLink] = useState('');
  useEffect(() => {
    setLink(location?.origin + url);
  }, []);

  return link;
}