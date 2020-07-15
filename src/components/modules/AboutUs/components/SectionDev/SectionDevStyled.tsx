import styled from "styled-components";
import media from "styled-media-query";

interface imgProps {
  rightPosition?: boolean;
  leftPosition?: boolean;
}

export const SectionDev = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    direction: rtl;
  `}
`;

export const TextContentWrapper = styled.div`
  max-width: 580px;
  direction: initial;
`;

export const SectionTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 32px;
  line-height: 29px;
  color: #3c3c3c;
  padding: 0 20px;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: #3c3c3c;
  padding: 8px 20px 0px;
  z-index: 2;
  ${media.lessThan("medium")`
    padding: 8px 20px 20px;
  `}
  ${media.greaterThan("medium")`
    font-size: 20px;
  `}
`;

export const ImageWrapper = styled.div<imgProps>`
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: ${(props) => props.rightPosition && "flex-end"};
    align-self: ${(props) => props.rightPosition && "flex-end"};
    overflow: ${(props) => props.rightPosition && "hidden"};
  }

  @media (max-width: 430px) {
    max-width: 100%;
  }

  ${media.lessThan("large")`
    max-width: 400px;
  `}
`;

export const DevImage = styled.img<imgProps>`
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
    height: 431px;
  `}

  ${media.lessThan("medium")`
    width: 380px;
    height: auto;
  `}

  ${media.lessThan("small")`
    width: 100%;
    height: auto;
  `}
`;
