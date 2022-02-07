import React from "react";
import * as S from "./HeaderStyled";
import { AnimatedLogo } from "../../elements";
import Image from "next/image";

const Header = () => (
  <S.HeaderContainer>
    <AnimatedLogo />
    <S.ScrollLink href="#SectionSlide">
      <Image src="scroll" alt="Clique para rolar" width="32px" height="32px" />
    </S.ScrollLink>
  </S.HeaderContainer>
);

export default Header;
