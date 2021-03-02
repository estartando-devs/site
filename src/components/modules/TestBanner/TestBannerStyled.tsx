import styled, { css } from "styled-components";
import { Typography, Button as ButtonComponent } from "../../elements";
import media from "../../../styles/breakpoints";

interface IAccordion {
  open: boolean;
}

const TestBannerContainer = styled.div<IAccordion>`
  padding: 15px 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => props.theme.palette?.primary.main}; */
  background-color: #05ad96;
  transition: 0.5s all linear;

  ${media.lessThan("medium")`
    padding-left: 10px;
    padding-right: 10px;
  `}
`;

const BannerAccordion = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
`;

const TesteBannerTitle = styled(Typography).attrs({
  variant: "h2",
  weight: "bold",
  color: "#3c3c3c",
})``;

const ArrowIcon = styled.img<IAccordion>`
  cursor: pointer;
  transform: ${(props) => props.open && "rotateX(180deg)"};
  transition: 0.5s all linear;
  height: 32px;
`;

const TestBannerFullContent = styled.div<IAccordion>`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  height: auto;
  max-height: 160px;
  ${(props) =>
    !props.open &&
    css`
      max-height: 0px;
      padding-top: 0px;
      overflow: hidden;
    `};
`;

const TestDescription = styled(Typography).attrs({
  variant: "body1",
  color: "#3c3c3c",
  weight: "400",
})`
  max-width: 500px;
  margin-bottom: 30px;
  transition: 0.5s all linear;
`;

const Button = styled(ButtonComponent)`
  color: #05ad96;

  &:hover {
    color: #05ad96;
  }
`;

export {
  TestBannerContainer,
  BannerAccordion,
  TesteBannerTitle,
  ArrowIcon,
  TestBannerFullContent,
  TestDescription,
  Button,
};
