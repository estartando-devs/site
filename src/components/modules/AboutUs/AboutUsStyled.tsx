import styled from "styled-components";
import media from "styled-media-query";
import { getImage } from "../../../shared/img";

interface IAbouteUsContainer {
  bgGreen: boolean;
}

const AboutUsContainer = styled.div<IAbouteUsContainer>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 52px 0px 0px;
  position: relative;
  transition: background-color linear 0.7s;
  background-color: ${(props) => (props.bgGreen ? "#00bfa6" : "#d3d3d3")};
  ${media.greaterThan("medium")`
    align-items: center;
  `}
`;

export const BackgroundElementDecorListras = styled.div`
  width: 227px;
  height: 237px;
  background-image: url(${getImage("decorListras")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  position: absolute;
  top: 213px;
  right: 0;
  ${media.greaterThan("medium")`
    top: 0;
    width: 550px;
    height: 558px;
  `}
`;

export const AboutUsTitle = styled.h2`
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  color: #3c3c3c;
  z-index: 2;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  span {
    color: transparent;
    -webkit-text-stroke: 2px #3c3c3c;
    margin-top: 20px;
    ${media.lessThan("medium")`
      margin-top: 0;
    `}
  }
  ${media.greaterThan("medium")`
    font-size: 48px;
    margin-bottom: 16px;
  `}
`;

export const InformationText = styled.p`
  max-width: 912px;
  font-size: 16px;
  line-height: 23px;
  color: #3c3c3c;
  padding: 24px 20px;
  z-index: 2;
  ${media.greaterThan("medium")`
    margin-bottom: 100px;
    font-size: 20px;
  `}
`;

export { AboutUsContainer };
