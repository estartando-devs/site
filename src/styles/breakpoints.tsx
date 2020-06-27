import { generateMedia } from "styled-media-query";

export const breakpoints = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

const media = generateMedia(breakpoints);

export default media;
