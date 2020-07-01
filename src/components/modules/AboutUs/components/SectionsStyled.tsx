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
    justify-content: space-evenly;
  `}
`;

export const SectionDesign = styled(SectionWrapper)`
  ${media.greaterThan("medium")`
    padding-left: 200px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const TextContentWrapper = styled.div`
  max-width: 580px;
`;

export const SectionTitle = styled.h2`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #3C3C3C;
  padding: 0 20px;
`;

export const SectionDescription = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #3C3C3C;
  padding: 8px 20px 40px;
  z-index: 2;
`;

export const ImageWrapper = styled.div<imgProps>`
  position: relative;
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: ${(props) => (props.rightPosition && "flex-end") || (props.leftPosition && "flex-start")};
  @media (max-width: 768px) {
    overflow: ${(props) => props.rightPosition && "hidden"};
  }
`;

export const SectionImage = styled.img<imgProps>`
  width: ${(props) => props.width};
  height: auto;
  z-index: 2;
  position: relative;
`;

export const DevImage = styled(SectionImage)`
  width: 291px;
  right: -40px;
  bottom: 0;
`;

export const DesignImage = styled(SectionImage)`
  ${media.lessThan("medium")`
    left: -40px;
    bottom: 0;
  `}
  top: 0;
  width: 100%;
`;

export const Triangle = styled.img`
  position: absolute;
  width: 277px;
  height: 198px;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const Waves = styled.img`
  ${media.greaterThan("medium")`
    top: -70px;
  `}
  position: absolute;
  top: -15px;
  right: 0;
  z-index: 2;
`;

export const CheksClose = styled.img`
  position: absolute;
  bottom: -37px;
  left: 30px;
  z-index: 2;
`;

export const Points = styled.img`
  width: 227px;
  height: 237px;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
  ${media.greaterThan("medium")`
    top: -45px;
    right: -100px;
    width: 336px;
    height: 245px;
  `}
`;
