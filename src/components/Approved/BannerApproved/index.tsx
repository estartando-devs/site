import React from 'react';
import { LinkWrapper } from '../../LinkWrapper';
import * as S from './BannerApprovedStyled';

export const BannerApproved = () => (
  <S.BannerApprovedContainer>
    <S.BannerContent>
      <S.BannerTitle variant="h2">
        A lista de aprovados para o curso já está disponível!
      </S.BannerTitle>
      <S.BannerDescription variant="body1">
        Confira a lista e já fique por dentro das próximas etapas que estão por
        vir!
      </S.BannerDescription>
      <S.ContainerButton>
        <LinkWrapper color="white" href="#Resultado">
          <S.BannerButton>Quero ver o resultado</S.BannerButton>
        </LinkWrapper>
      </S.ContainerButton>
    </S.BannerContent>
  </S.BannerApprovedContainer>
);
