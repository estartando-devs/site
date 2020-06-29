import styled from "styled-components";
import { SlideContainer, ButtonNext } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";

interface IOMTitle {
  isBold?: boolean;
}

interface IOMText {
  color?: string;
}

interface IOMTagsBox {
  justifyContent?: string;
}

const OMContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0 90px 0 45px;
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
})<IOMText>`
  line-height: 22px;
  margin: 20px 0;
`;

const OMTagsBox = styled.div<IOMTagsBox>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
`;

const OMTag = styled(OMText)`
  color: #020202;
  margin: 5px 10px;
`;

const OMButtonNext = styled(ButtonNext)``;

export {
  OMContainer,
  OMContent,
  OMTitle,
  OMText,
  OMTagsBox,
  OMTag,
  OMButtonNext,
};
