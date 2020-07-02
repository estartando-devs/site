import styled from "styled-components";
import { SlideContainer } from "../../SlideItemsStyled";
import { Typography, Button as ButtonElement } from "../../../../../elements";
import media from "../../../../../../styles/breakpoints";
import { IButtonBox } from "./SelectiveProcess";

interface ISelectiveProcessTitle {
  isBold?: boolean;
}

interface ISidePosition {
  right?: boolean;
  isMobile?: boolean;
}

const SelectiveProcessContainer = styled(SlideContainer)`
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const SelectiveProcessContent = styled.div`
  margin: 50px 0 0;
  padding: 0 30px 40px 15px;

  ${media.greaterThan("medium")`
    padding: 10px 100px 40px;
    margin: 0;
  `}
`;

const SelectiveProcessTitle = styled(Typography).attrs({
  variant: "h1",
  color: "#272727",
})<ISelectiveProcessTitle>`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  line-height: 32px;
  text-transform: uppercase;
  font-weight: ${(props) => props.isBold && "600"};
  font-size: ${(props) => (props.isBold ? "2.5rem" : "1.5rem")};
  margin-left: 25px;

  @media (min-width: 768px) {
    font-size: ${(props) => (props.isBold ? "3rem" : "2rem")};
    margin: 4px 0;
  }
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

  ${media.greaterThan("medium")`
    margin-left: 0;
    max-width: initial;
  `}
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${media.greaterThan("medium")`
    justify-content: space-between;
  `}
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  padding-top: 50px;

  ${media.greaterThan("medium")`
    flex-direction: row;
  `}
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  right: 50%;
  margin: 0 auto;
  height: 100%;
  width: 4px;
  background-color: #f7f7f7;

  ${media.greaterThan("medium")`
    height: 4px;
    width: 100%;
    left: initial;
    right: initial;
    top: 50%;
    bottom: 50%;
  `}
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

  ${media.greaterThan("medium")`
    min-height: 350px;

    &:nth-child(even) {
    justify-content: initial;
      align-items: flex-start;
    }

    &:nth-child(odd) {
    justify-content: initial;
      align-items: flex-end;
    }
  `}
`;

const StepContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  position: relative;

  &:first-child() {
    padding-top: 50px;
  }

  ${media.greaterThan("medium")`
    height: 50%;
    width: 100%;
    max-width: 270px;
    align-items: center;
  `};
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
  display: ${(props) => (props.isMobile ? "block" : "none")};

  ${media.greaterThan<ISidePosition>("medium")`
    left: initial;
    right: initial;
    display: ${(props) => (props.isMobile ? "none" : "block")};

    bottom: ${(props) => props.right && "25px"};
    top: ${(props) => !props.right && "-19px"};
    transform: ${(props) => (props.right ? "rotate(-90deg)" : "rotate(90deg)")};

  `}
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

  ${media.greaterThan<ISidePosition>("medium")`
    margin-top: ${(props) => !props.right && "15px"};
  `}
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

const ButtonContainer = styled.div<IButtonBox>`
  display: flex;
  justify-content: flex-start;
  display: ${(props) => !props.isMobile && "none"};

  ${media.greaterThan<IButtonBox>("medium")`
    display: ${(props) => (props.isMobile ? "none" : "flex")};
  `}
`;

const ButtonBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled.a`
  margin-top: -60px;
  z-index: 2;

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`;

const StepButton = styled(ButtonElement)`
  background-color: ${(props) => props.theme.palette.background.default};
  border: none;
`;

export {
  SelectiveProcessContainer,
  SelectiveProcessContent,
  SectionHeader,
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
  ButtonLink,
};
