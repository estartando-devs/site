import styled from "styled-components";
import { SlideContainer, ButtonNext } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";
import media from "../../../../../../styles/breakpoints";
import Image from 'next/image'

const MPContainer = styled(SlideContainer)`
  align-items: center;

  ${media.greaterThan("medium")`
    flex-direction: row-reverse;
  `}
`;

const MPTitle = styled(Typography).attrs({
  variant: "h1",
  weight: "bold",
})`
  max-width: 240px;
  line-height: 37px;

  ${media.greaterThan("medium")`
    max-width: 457px;
    font-size: 3rem;
    line-height: 55px;
  `}
`;

const MPImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

const MPButtonNext = styled(ButtonNext)``;

export {
  MPContainer, MPTitle, MPImage, MPButtonNext,
};
