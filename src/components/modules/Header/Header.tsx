import React from "react";
import * as S from "./HeaderStyled";
import { iconScroll } from "../../../shared/img";
import { AnimatedLogo } from "../../elements";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.ScrollLink href="#SectionSlide">
        <AnimatedLogo width="260px" />
        <S.ScrollImage src={iconScroll} alt="Clique para rolar" />
      </S.ScrollLink>
    </S.HeaderContainer>
  );
};

export default Header;
