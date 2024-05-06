import style from './StarIcon.module.css';

export function Star() {
  return (
    <svg
      width="28.000000"
      height="28.000000"
      viewBox="0 0 28 28"
      fill="none"
      className={style.svg}
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip16_280">
          <rect
            id="star"
            width="28.000000"
            height="28.000000"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Star"
        width="28.000000"
        height="28.000000"
        fill="#FFFFFF"
        fill-opacity="0"
      />
      <g clip-path="url(#clip16_280)">
        <path
          id="Vector"
          d="M13.99 20.7L6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7Z"
          fill="#D5D6DC"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M6.79 24.49L8.17 16.47L2.34 10.79L10.39 9.63L13.99 2.33L17.59 9.63L25.64 10.79L19.8 16.47L21.18 24.49L13.99 20.7L6.79 24.49Z"
          stroke="#D5D6DC"
          stroke-opacity="1.000000"
          stroke-width="2.000000"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}