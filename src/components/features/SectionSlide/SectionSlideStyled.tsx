import styled from "styled-components";
import { Typography } from "../../elements";
import Image from 'next/image'

const SectionSlideContainer = styled.div`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.default};
  position: relative;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  overflow: hidden;
`;

const SectionContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 65px 0 20px;
`;

const SectionTitle = styled(Typography).attrs({
  variant: "h1",
  weight: "bold",
})`
  max-width: 240px;
  line-height: 37px;
`;

const ButtonSlide = styled(Image)`
  position: absolute;
  height: 100%;
  right: 0;
`;

const SectionImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 300px;
`;

export {
  SectionSlideContainer,
  SectionContainer,
  SectionTitle,
  SectionImage,
  ButtonSlide,
};
