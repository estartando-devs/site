import React from "react";
import * as S from "./HeaderStyled";
import { Logo } from "../../elements";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.SideContent>
        <Logo width="125px" />
      </S.SideContent>
      <S.Separator />
      <S.TitleContainer>
        <S.HeaderTitle>Inscrições 2020</S.HeaderTitle>
      </S.TitleContainer>
    </S.HeaderContainer>
  );
};

export default Header;
