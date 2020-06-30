import styled, { keyframes } from "styled-components";

interface LogoProps {
    width: string,
    height: string,
    padding: string,
    margin: string
    position: string,
}

const keyframeAnimation = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

export const LogoSvg = styled.svg`
path:nth-child(1){
    stroke-dasharray: 2894;
    stroke-dashoffset: 2894;
    animation: ${keyframeAnimation} 2s ease forwards;
}

path:nth-child(2){
    stroke-dasharray: 2221;
    stroke-dashoffset: 2221;
    animation: ${keyframeAnimation} 2s ease forwards 0.3s;
}

path:nth-child(3){
    stroke-dasharray: 2458;
    stroke-dashoffset: 2458;
    animation: ${keyframeAnimation} 2s ease forwards 0.6s;
}

path:nth-child(4){
    stroke-dasharray: 1849;
    stroke-dashoffset: 1849;
    animation: ${keyframeAnimation} 2s ease forwards 0.9s;
}

path:nth-child(5){
    stroke-dasharray: 944;
    stroke-dashoffset: 944;
    animation: ${keyframeAnimation} 2s ease forwards 1.2;
}

path:nth-child(6){
    stroke-dasharray: 1971;
    stroke-dashoffset: 1971;
    animation: ${keyframeAnimation} 2s ease forwards 1.5s;
}

path:nth-child(7){
    stroke-dasharray: 2167;
    stroke-dashoffset: 2167;
    animation: ${keyframeAnimation} 2s ease forwards 2.8s;
}

path:nth-child(8){
    stroke-dasharray: 2283;
    stroke-dashoffset: 2283;
    animation: ${keyframeAnimation} 2s ease forwards 2.1;
}

path:nth-child(9){
    stroke-dasharray: 8354;
    stroke-dashoffset: 8354;
    animation: ${keyframeAnimation} 2s ease forwards 2.1;
}
`

export const LogoContainer = styled.img<LogoProps>`
display: flex;
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
margin: ${(props) => props.margin};
position: ${(props) => props.position};
`;
