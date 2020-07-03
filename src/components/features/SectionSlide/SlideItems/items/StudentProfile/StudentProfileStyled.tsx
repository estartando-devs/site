import styled from "styled-components";
import { SlideContainer, SlideTitle } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";
import media from "../../../../../../styles/breakpoints";

interface ISPTitle {
  isBold?: boolean;
}

const SPContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0;
`;

const SPContent = styled.div`
  margin: 50px 0 0;
  padding: 0 90px 0 45px;

  ${media.greaterThan("medium")`
    padding: 20px 264px;
  `}
`;

const SPStudentImage = styled.img`
  width: 270px;
  height: auto;
`;

const SPTitleBox = styled.div`
  margin: -70px 0 50px;
`;

const SPTitle = styled(SlideTitle).attrs({ color: "#FFF" })``;

const SPText = styled(Typography).attrs({
  variant: "body1",
  color: "#d3d3d3",
})`
  line-height: 19px;
  margin: 20px 0;
  font-weight: normal;
`;

export { SPContainer, SPContent, SPStudentImage, SPTitleBox, SPTitle, SPText };
