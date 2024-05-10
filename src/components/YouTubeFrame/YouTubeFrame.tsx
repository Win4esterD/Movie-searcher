import style from './YouTubeFrome.module.css';

type YoutubeFrameProps = {
  youtubeKey: string;
  css?: React.CSSProperties;
};

export function YouTubeFrame({youtubeKey, css}: YoutubeFrameProps) {
  return (
    <iframe
      style={Object.assign({}, css)}
      className={style.frame}
      width="490"
      height="273"
      src={`https://www.youtube.com/embed/${youtubeKey}`}
    ></iframe>
  );
}
