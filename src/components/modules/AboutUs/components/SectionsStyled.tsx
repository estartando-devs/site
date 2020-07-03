import styled from "styled-components";
import media from "styled-media-query";

interface imgProps {
  rightPosition?: boolean;
  leftPosition?: boolean;
}

export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 50px;
`;

export const SectionDev = styled(SectionWrapper)`
  ${media.greaterThan("medium")`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `}

  ${media.greaterThan("large")`
    justify-content: center;
  `}
`;

export const SectionDesign = styled(SectionWrapper)`
  ${media.greaterThan("medium")`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `}
  ${media.greaterThan("large")`
    justify-content: center;
    margin-top: 100px;
  `}
`;

export const TextContentWrapper = styled.div`
  max-width: 580px;
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
  padding: 8px 20px 40px;
  z-index: 2;
  ${media.greaterThan("medium")`
    margin-bottom: 100px;
    font-size: 20px;
  `}
`;

export const ImageWrapper = styled.div<imgProps>`
  position: relative;
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: ${(props) => (props.rightPosition && "flex-end") || (props.leftPosition && "flex-start")};
  align-self: ${(props) => (props.rightPosition && "flex-end")};
  @media (max-width: 768px) {
    overflow: ${(props) => props.rightPosition && "hidden"};
  }

  @media (max-width: 430px) {
    max-width:100%;
  }

  /* @media (max-width: 910px) {
    ${(props) => props.leftPosition && {
    position: "absolute",
    right: "0",
    bottom: "0",
  }}
  } */
`;

export const SectionImage = styled.img<imgProps>`
  width: ${(props) => props.width};
  height: auto;
  z-index: 2;
  position: relative;
`;

export const DevImage = styled(SectionImage)`
  width: 360px;
  bottom: 0;
  ${media.lessThan("small")`
    right: -70px;
    width: 100%;
  `}
  ${media.greaterThan("large")`
    padding-right: 30px;
  `}
`;

export const DesignImage = styled(SectionImage)`
  width: 360px;
  ${media.lessThan("small")`
    width: 100%;
    left: 0px;
  `}
`;

export const CheksClose = styled.img`
  position: absolute;
  bottom: -37px;
  left: 30px;
  z-index: 2;
`;
