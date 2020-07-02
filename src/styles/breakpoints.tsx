import { generateMedia } from "styled-media-query";

interface IBreakpoints {
  huge: string;
  large: string;
  medium: string;
  small: string;
}

export const breakpoints = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

const media = generateMedia<IBreakpoints>(breakpoints);

export default media;
