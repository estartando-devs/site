import styled from "styled-components";
import media from "styled-media-query";
import { SlideContainer, ButtonNext } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";
import { waves } from "../../../assets";

interface IOMTitle {
  isBold?: boolean;
}

interface IOMTagsBox {
  justifyContent?: string;
}

const OMContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0 90px 0 45px;

  ${media.lessThan("medium")`
    background-image: url(${waves});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
  `}
`;

const OMContent = styled.div`
  margin: 50px 0;
`;

const OMTitle = styled(Typography).attrs({
  variant: "h1",
  color: "#3C3C3C",
})<IOMTitle>`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 41px;
  text-transform: uppercase;
  font-weight: ${(props) => props.isBold && "600"};
`;

const OMText = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
})`
  line-height: 22px;
  margin: 20px 0;
`;

const OMTagsContainer = styled.div`
  ${media.lessThan("medium")`
    padding-top: 114px;
  `};
`;

const OMTagsBox = styled.div<IOMTagsBox>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
`;

const OMTag = styled(OMText)`
  margin: 5px 10px;
  font-weight: 600;

  ${media.lessThan("medium")`
    color: #00bfa6;
  `};
`;

const OMButtonNext = styled(ButtonNext)``;

export {
  OMContainer,
  OMContent,
  OMTitle,
  OMText,
  OMTagsContainer,
  OMTagsBox,
  OMTag,
  OMButtonNext,
};
