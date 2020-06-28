import styled, { css, keyframes } from "styled-components";

interface LogoProps {
    width: string,
    height: string,
    padding: string,
    margin: string
    position: string,
    animation: string,
}

const rotate = keyframes`
    from { 
        transform: rotate(0deg);
    }
    to {  
        transform: rotate(360deg);
    }
`;

export const rotateRule = css`
  ${rotate} 20s infinite linear;
`

export const LogoContainer = styled.img<LogoProps>`
display: flex;
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
margin: ${(props) => props.margin};
position: ${(props) => props.position};
animation: ${(props) => props.animation};
`;
