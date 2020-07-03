import styled from "styled-components";
import { Typography } from "../../../elements";
import media from "../../../../styles/breakpoints";

interface ISectionContainer {
  bgColor?: String;
}

interface ISlideTitle {
  children: any | string;
  color?: string;
}

const SlideContainer = styled.div.attrs((props: ISectionContainer) => ({
  style: {
    backgroundColor: props.bgColor,
  },
}))<ISectionContainer>`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 65px 0 20px;
  overflow: hidden;
  transition: 0.5s;
  transform: ${(props) => `translateX(${props.position * -100}%)`};
  flex: 1;
  position: relative;
`;

const SlideTitle = styled(Typography).attrs({
  variant: "h1",
})<ISlideTitle>`
  color: ${(props) => props.color || "#3C3C3C"};
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 41px;
  text-transform: uppercase;
  font-size: 1.5rem;

  & > b {
    font-weight: bold;
    font-size: 2.25rem;
  }

  ${media.greaterThan("medium")`
    font-size: 2.25rem;

    & > b {
      font-size: 3rem;
      line-height: 55px;
    }
  `}
`;

const ButtonNext = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

const ButtonPrevious = styled.img`
  position: absolute;
  top: 17px;
  left: 17px;
`;

export { SlideContainer, SlideTitle, ButtonNext, ButtonPrevious };
