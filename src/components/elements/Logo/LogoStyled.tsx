import styled from "styled-components";
import media from "styled-media-query";
import Image from 'next/image'

interface LogoProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
}

export const LogoContainer = styled(Image)<LogoProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  ${media.lessThan("medium")`
    width: 130px;
  `}
`;
