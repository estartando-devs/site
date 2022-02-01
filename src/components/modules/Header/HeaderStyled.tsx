import styled from "styled-components";
import media from "../../../styles/breakpoints";
import { backgroundHeader } from "../../../../public/img";
import Image from 'next/image'

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${backgroundHeader});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${media.greaterThan("small")`
        height: 100vh;
    `}
`;

const ScrollLink = styled.a`
  position: absolute;
  cursor: pointer;
  bottom: 30px;
`;

const ScrollImage = styled(Image)`
  width: 32px;
  height: auto;
`;

export {
  HeaderContainer, ScrollLink, ScrollImage,
};
