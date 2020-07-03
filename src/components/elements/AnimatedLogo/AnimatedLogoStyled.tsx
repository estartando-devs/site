import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const keyframeAnimation = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const AnimatedLogoSvg = styled.svg`
  ${media.lessThan("medium")`
    width: 440px;
    height: auto;
  `}

  ${media.lessThan("small")`
    width: 280px;
    height: auto;
  `}

  path {
    stroke: white;
    stroke-width: 3;
  }

  path:nth-child(1){
    stroke-dasharray: 545;
    stroke-dashoffset: 545;
    animation: ${keyframeAnimation} 2s ease forwards;
  }

  path:nth-child(2){
    stroke-dasharray: 420;
    stroke-dashoffset: 420;
    animation: ${keyframeAnimation} 2s ease forwards 0.3s;
  }

  path:nth-child(3){
    stroke-dasharray: 465;
    stroke-dashoffset: 465;
    animation: ${keyframeAnimation} 2s ease forwards 0.6s;
  }

  path:nth-child(4){
    stroke-dasharray: 353;
    stroke-dashoffset: 353;
    animation: ${keyframeAnimation} 2s ease forwards 0.9s;
  }

  path:nth-child(5){
    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    animation: ${keyframeAnimation} 2s ease forwards 1;
  }

  path:nth-child(6){
    stroke-dasharray: 375;
    stroke-dashoffset: 375;
    animation: ${keyframeAnimation} 2s ease forwards 1.5s;
  }

  path:nth-child(7){
    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    animation: ${keyframeAnimation} 2s ease forwards 1.8s;
  }

  path:nth-child(8){
    stroke-dasharray: 416;
    stroke-dashoffset: 416;
    animation: ${keyframeAnimation} 2s ease forwards 1;
  }

  path:nth-child(9){
    stroke-dasharray: 439;
    stroke-dashoffset: 439;
    animation: ${keyframeAnimation} 2s ease forwards 1;
  }
`;
