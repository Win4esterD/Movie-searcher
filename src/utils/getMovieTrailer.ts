import {video} from '@/types/video';

export function getMovieTrailer(videos: Array<video>): string | undefined {
  if (videos) {
    for (let item of videos) {
      if (item.type === 'Trailer' && item.site === 'YouTube') {
        return item.key;
      }
    }
  }
}
