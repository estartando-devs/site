import styled from "styled-components";
import { Typography } from "../../elements";
import media from "../../../styles/breakpoints";

interface IAccordion {
  open: boolean;
}

const TestBannerContainer = styled.div<IAccordion>`
  padding: ${(props) => (props.open ? "50px 100px" : " 5px 100px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette?.primary.main};
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
  transition: 0.5s all linear;
  padding-top: 15px;
  display: ${(props) => !props.open && "none"};
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

export {
  TestBannerContainer,
  BannerAccordion,
  TesteBannerTitle,
  ArrowIcon,
  TestBannerFullContent,
  TestDescription,
};
