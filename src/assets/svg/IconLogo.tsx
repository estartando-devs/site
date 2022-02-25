import { LogoProps } from './types';

const IconLogo = ({ width = '165', height = '241' }: LogoProps) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M82.5 79 30 107.407V138h15.167v-21.852L82.5 96l20.625 11.407-35.75 20.213L82 135.815l53-28.408L82.5 79ZM45.167 149H30v28.954L82.5 207l52.5-29-15-9.333L82.5 189l-37.333-20.333V149Z"
      fill="#606062"
    />
    <path
      d="M15 138H0V89.5L83 44l67 36.5V8l15-8v138h-15.5V97.5L83 61 15 98.5V138ZM15 149H0v46.5l83 45 82-45V149h-15v38l-68 36.5-67-37V149Z"
      fill="#81CAA8"
    />
  </svg>
);

export { IconLogo };
