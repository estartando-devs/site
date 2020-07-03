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
  margin: 50px 0;
  padding: 0 90px 0 45px;

  ${media.greaterThan("medium")`
    padding: 64px 264px;
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
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  object-position: top;

  ${media.greaterThan("medium")`
    max-height: 260px;
  `}
`;

const OMButtonNext = styled(ButtonNext)``;

export { OMContainer, OMContent, OMTitle, OMText, OMButtonNext, Image };
