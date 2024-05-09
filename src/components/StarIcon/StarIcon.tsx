import style from './StarIcon.module.css';

type starIconProps = {
  id?: number;
  pointState?: number;
  clickHandler: (value: number) => void;
  mouseOverHandler: (value: number) => void;
};

export function StarIcon({
  id = 0,
  pointState = 0,
  mouseOverHandler,
  clickHandler,
}: starIconProps) {
  return (
    <svg
      width="28.000000"
      height="28.000000"
      viewBox="0 0 28 28"
      fill={pointState >= id ? '#fab005' : 'none'}
      className={style.svg}
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={() => mouseOverHandler(id)}
      onClick={() => clickHandler(id)}
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip16_280">
          <rect
            id="star"
            width="28.000000"
            height="28.000000"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Star"
        width="28.000000"
        height="28.000000"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip16_280)">
        <path
          id="Vector"
          d="M13.99 20.7L6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7Z"
          fill="#D5D6DC"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7L6.79 24.49Z"
          stroke={pointState >= id ? '#fab005' : 'none'}
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
