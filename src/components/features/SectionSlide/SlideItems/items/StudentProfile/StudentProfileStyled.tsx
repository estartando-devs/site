import styled from "styled-components";
import { SlideContainer, SlideTitle } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";
import media from "../../../../../../styles/breakpoints";
import Image from 'next/image'

// interface ISPTitle {
//   isBold?: boolean;
// }

interface ISPText {
  children?: string | any;
}

const SPContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0;
  height: 100%;
`;

const SPContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0 0;
  padding: 0 90px 0 45px;
  height: 100%;
  min-height: 100vh;

  ${media.greaterThan("medium")`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
  `}

  ${media.greaterThan("large")`
    padding: 20px 90px;
  `}
`;

const SPImageBox = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    align-items: flex-end;
  `}
`;

const SPStudentImage = styled(Image)`
  width: 270px;
  height: auto;

  ${media.greaterThan("medium")`
    width: 400px;
  `}

  ${media.greaterThan("large")`
    width: 528px;
  `}
`;

const SPTitleBox = styled.div`
  margin: -90px 0 50px;

  ${media.greaterThan("medium")`
    margin: -150px -25px 50px 0;
  `}
`;

const SPTitle = styled(SlideTitle).attrs({
  color: "#FFF",
})``;

const SPTextBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 585px;

  ${media.greaterThan("medium")`
    margin-left: 60px;
  `}
`;

const SPText = styled(Typography).attrs({
  variant: "body1",
  color: "#d3d3d3",
})<ISPText>`
  line-height: 19px;
  margin: 10px 0;
  font-weight: normal;
`;

export {
  SPContainer,
  SPContent,
  SPImageBox,
  SPStudentImage,
  SPTitleBox,
  SPTitle,
  SPTextBox,
  SPText,
};
