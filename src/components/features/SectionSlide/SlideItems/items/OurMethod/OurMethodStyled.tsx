import styled from "styled-components";
import media from "styled-media-query";
import { SlideContainer, ButtonNext, SlideTitle } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";

interface IOMText {
  children: any | string;
}

interface IOMTagsBox {
  justifyContent?: string;
}

const OMContainer = styled(SlideContainer)`
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 0;
`;

const OMContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0;
  padding: 0 90px 0 45px;

  ${media.greaterThan("medium")`
    justify-content: flex-end;
    flex-direction: row;
    align-items: flex-start;
    padding: 64px 94px 0;
  `}
`;

const OMTextBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 574px;

  ${media.greaterThan("medium")`
    margin-right: -50px;
  `}
`;

const OMTitle = SlideTitle;

const OMText = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
  weight: "normal",
})<IOMText>`
  line-height: 22px;
  margin: 20px 0;

  ${media.greaterThan("medium")`
    font-size: 1.25rem;

  `}
`;

const WavesImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  object-position: top;

  ${media.greaterThan("medium")`
    max-height: 260px;
  `}
`;

const SideImage = styled.img`
  display: none;

  ${media.greaterThan("medium")`
    display: block;
    width: 400px;
  `}

  ${media.greaterThan("large")`
    width: 575px;
  `}
`;

const OMButtonNext = ButtonNext;

export {
  OMContainer,
  OMContent,
  OMTextBox,
  OMTitle,
  OMText,
  OMButtonNext,
  WavesImage,
  SideImage,
};
