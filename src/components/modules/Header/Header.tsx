import React from "react";
import * as S from "./HeaderStyled";
import { iconScroll } from "../../../../public/img";
import { AnimatedLogo } from "../../elements";

const Header = () => (
  <S.HeaderContainer>
    <AnimatedLogo />
    <S.ScrollLink href="#SectionSlide">
      <S.ScrollImage src={iconScroll} alt="Clique para rolar" />
    </S.ScrollLink>
  </S.HeaderContainer>
);

export default Header;
