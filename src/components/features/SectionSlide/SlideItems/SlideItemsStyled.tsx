import styled from "styled-components";
import { Typography } from "../../../elements";

interface ISectionContainer {
  bgColor?: String;
}

const SectionContainer = styled.div.attrs((props: ISectionContainer) => ({
  style: { backgroundColor: props.bgColor },
}))<ISectionContainer>`
    min-height: 100%;
    width: 100%;
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

const Text = styled(Typography).attrs({
  variant: "body1",
  color: "#3C3C3C",
})`

`;

const ButtonSlide = styled.img`
    position: absolute;
    height: 100%;
    right: 0;
`;

const SectionImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 300px;
`;

export {
  SectionContainer,
  SectionTitle,
  Text,
  ButtonSlide,
  SectionImage,
};
