import React from 'react';
import { SocialShareButtons } from './SocialShareButtons';
import * as S from './styles';
import { Typography } from '../Typography';

import { Logo } from '../Logo';

export const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <Logo width={65} height={94} />
      <S.FooterContent>
        <Typography variant="body1" weight="700">
          Estartando Devs
        </Typography>
        <SocialShareButtons />
      </S.FooterContent>
    </S.FooterContainer>
    <S.CopyContainer>
      <Typography variant="body3" weight="400">
        © Estartando Devs 2022
      </Typography>
      <S.CopyText variant="body3" weight="400">
        Todos os direitos reservados.
      </S.CopyText>
    </S.CopyContainer>
  </S.FooterWrapper>
);
