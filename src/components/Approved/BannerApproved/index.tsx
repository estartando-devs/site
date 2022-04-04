import React from 'react';
import { LinkWrapper } from '../../LinkWrapper';
import * as S from './BannerApprovedStyled';

export const BannerApproved = () => (
  <S.BannerApprovedContainer>
    <S.BannerContent>
      <S.BannerTitle variant="h2">
        A lista de aprovados para os cursos já está disponível!
      </S.BannerTitle>
      <S.ContainerButton>
        <LinkWrapper color="white" href="#resultado">
          <S.BannerButton>Quero ver o resultado</S.BannerButton>
        </LinkWrapper>
      </S.ContainerButton>
    </S.BannerContent>
  </S.BannerApprovedContainer>
);
