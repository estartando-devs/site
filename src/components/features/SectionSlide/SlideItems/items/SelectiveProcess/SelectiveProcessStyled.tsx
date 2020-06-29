import styled from "styled-components";
import { SlideContainer } from "../../SlideItemsStyled";
import { Typography } from "../../../../../elements";

interface ISelectiveProcessTitle {
  isBold?: boolean;
}

const SelectiveProcessContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0 90px 0 45px;
`;

const SelectiveProcessContent = styled.div`
  margin: 50px 0 0;
`;

const SelectiveProcessStudentImage = styled.img`
  width: 270px;
  height: auto;
`;

const SelectiveProcessTitleBox = styled.div`
  margin: -70px 0 50px;
`;

const SelectiveProcessTitle = styled(Typography).attrs({
  variant: "h1",
  color: "#3C3C3C",
})<ISelectiveProcessTitle>`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 28px;
  text-transform: uppercase;
  font-weight: ${(props) => props.isBold && "600"};
  font-size: ${(props) => (props.isBold ? "2.5rem" : "1.5rem")};
`;

const SelectiveProcessSubTitle = styled(Typography).attrs({
  variant: "h2",
  color: "#3C3C3C",
  weight: "bold",
})`
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
`;

const SelectiveProcessText = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
})`
  line-height: 19px;
  margin: 20px 0;
`;

export {
  SelectiveProcessContainer,
  SelectiveProcessContent,
  SelectiveProcessStudentImage,
  SelectiveProcessTitleBox,
  SelectiveProcessTitle,
  SelectiveProcessSubTitle,
  SelectiveProcessText,
};
