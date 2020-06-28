import React from "react";
import * as S from "./HeaderStyled";
import { iconScroll } from "../../../shared/img";
import { Logo } from "../../elements";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Logo width="260px" />
      <S.ScrollLink href="#scrollDestiny">
        <S.ScrollImage src={iconScroll} alt="Clique para rolar" />
      </S.ScrollLink>
    </S.HeaderContainer>
  );
};

export default Header;
