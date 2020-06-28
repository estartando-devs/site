import styled from "styled-components";
import { Typography } from "../../elements";

const SectionSlideContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.palette.background.default};
`;

const SectionContainer = styled.div`
    height: 100%;
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

export { SectionSlideContainer, SectionContainer, SectionTitle, SectionImage, ButtonSlide };
