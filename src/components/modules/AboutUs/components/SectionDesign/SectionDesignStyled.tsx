import styled from "styled-components";
import media from "styled-media-query";

interface imgProps {
  rightPosition?: boolean;
  leftPosition?: boolean;
}

export const SectionDesign = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px;
  `}
`;

export const TextContentWrapper = styled.div`
  max-width: 580px;
  padding: 0 20px;
  ${media.lessThan("medium")`
    padding-top: 50px;
  `}
  ${media.greaterThan("medium")`
    padding-left: 70px;
    font-size: 20px;
  `}
`;

export const SectionTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 32px;
  line-height: 29px;
  color: #3c3c3c;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: #3c3c3c;
  padding: 8px 0 40px;
  z-index: 2;
  ${media.greaterThan("medium")`
    padding: 8px 0px;
    font-size: 20px;
  `}
`;

export const ImageWrapper = styled.div<imgProps>`
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: ${(props) => props.leftPosition && "flex-start"};
  }

  ${media.greaterThan("medium")`
    justify-content: flex-end;
    max-height: 300px;
  `}
  ${media.lessThan("large")`
    justify-content: flex-start;
  `}
`;

export const DesignImage = styled.img<imgProps>`
  z-index: 2;
  position: relative;
  ${media.greaterThan("large")`
    top: -186px;
    width: auto;
    height: 518px;
  `}

  ${media.greaterThan("medium")`
    top: -110px;
    width: auto;
    height: 451px;
  `}

  ${media.lessThan("medium")`
    width: 380px;
    height: auto;
  `}

  ${media.lessThan("small")`
    width: 100%;
    height: auto;
    left: 0px;
  `}




`;

export const CheksClose = styled.img`
  position: absolute;
  bottom: -37px;
  left: 0px;
  z-index: 2;
`;
