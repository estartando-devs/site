import styled from "styled-components";
import { SlideContainer } from "../../SlideItemsStyled";
import { Typography, Button as ButtonElement } from "../../../../../elements";

interface ISelectiveProcessTitle {
  isBold?: boolean;
}

interface ISidePosition {
  right?: boolean;
}

const SelectiveProcessContainer = styled(SlideContainer)`
  justify-content: flex-start;
  padding: 0 30px 40px 15px;
`;

const SelectiveProcessContent = styled.div`
  margin: 50px 0 0;
`;

const SelectiveProcessTitle = styled(Typography).attrs({
  variant: "h1",
  color: "#3C3C3C",
})<ISelectiveProcessTitle>`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 32px;
  text-transform: uppercase;
  font-weight: ${(props) => props.isBold && "600"};
  font-size: ${(props) => (props.isBold ? "2.5rem" : "1.5rem")};
  margin-left: 25px;
`;

const SelectiveProcessText = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
})`
  line-height: 19px;
  margin: 20px 0;
  font-size: 0.9rem;
  max-width: 200px;
  margin-left: 25px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
  position: relative;

  &:nth-child(1) {
    padding-top: 50px;
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  margin: 0 auto;
  height: 100%;
  width: 4px;
  background-color: #f7f7f7;
`;

const SideStepContainer = styled.div`
  width: 100%;
  display: flex;

  &:nth-child(even) {
    justify-content: flex-end;
  }

  &:nth-child(odd) {
    justify-content: flex-start;
  }
`;

const StepContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  &:first-child() {
    padding-top: 50px;
  }
`;

const StepTitleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepTitleDot = styled.img<ISidePosition>`
  position: absolute;
  left: ${(props) => props.right && "-6px"};
  right: ${(props) => !props.right && "-10px"};
  transform: ${(props) => !props.right && "rotateY(180deg)"};
`;

const StepTitle = styled(Typography).attrs({
  variant: "h2",
  color: "#3C3C3C",
  weight: "bold",
})<ISidePosition>`
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  margin: 0 28px;
`;

const StepDescription = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
})`
  line-height: 19px;
  padding: 10px 6px;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

const ButtonBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const StepButton = styled(ButtonElement)`
  background-color: ${(props) => props.theme.palette.background.default};
  border: none;
  margin-top: -60px;
`;

export {
  SelectiveProcessContainer,
  SelectiveProcessContent,
  SelectiveProcessTitle,
  SelectiveProcessText,
  StepsContainer,
  VerticalLine,
  SideStepContainer,
  StepContent,
  StepTitleBox,
  StepTitleDot,
  StepTitle,
  StepDescription,
  ButtonContainer,
  ButtonBox,
  StepButton,
};
