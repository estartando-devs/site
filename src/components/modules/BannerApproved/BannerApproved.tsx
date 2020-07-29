import React from "react";
import * as S from "./BannerApprovedStyled";

const BannerApproved = () => {
  return (
    <S.BannerApprovedContainer>
      <S.BannerContent>
        <S.BannerTitle variant="h2">
          A lista de aprovados na primeira etapa já está disponível!
        </S.BannerTitle>
        <S.BannerDescription variant="body1">
          Confira a lista e já fique por dentro das próximas etapas que estão
          por vir!
        </S.BannerDescription>
        <a href="#Resultado">
          <S.BannerButton onClick={() => {}}>
            Quero ver o resultado
          </S.BannerButton>
        </a>
      </S.BannerContent>
    </S.BannerApprovedContainer>
  );
};

export default BannerApproved;
