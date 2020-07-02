import styled from "styled-components";
import { SlideContainer } from "../../SlideItemsStyled";
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

const SPTitle = styled(Typography).attrs({
  variant: "h1",
  color: "#FFF",
})<ISPTitle>`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 28px;
  text-transform: uppercase;
  font-weight: ${(props) => props.isBold && "600"};
  font-size: ${(props) => (props.isBold ? "2.5rem" : "1.5rem")};
`;

const SPText = styled(Typography).attrs({
  variant: "body1",
  // color: "#3C3C3C",
})`
  line-height: 19px;
  margin: 20px 0;
`;

export { SPContainer, SPContent, SPStudentImage, SPTitleBox, SPTitle, SPText };
