import styled from "styled-components";

interface LogoProps {
    width: string,
    height: string,
    padding: string,
    margin: string
}

export const LogoContainer = styled.img<LogoProps>`
display: flex;
width: ${(props) => props.width};
height: ${(props) => props.height};
padding: ${(props) => props.padding};
margin: ${(props) => props.margin};
`;
