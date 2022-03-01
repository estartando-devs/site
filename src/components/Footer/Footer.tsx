import React from 'react';
import { SocialShareButtons } from './SocialShareButtons';
import * as S from './FooterStyled';
import { Logo } from '../Logo';

const Footer = () => (
  <S.FooterContainer>
    <Logo width={65} height={94} />
    <S.FooterContent>
      <S.FooterTitle variant="body1" weight="700">
        Estartando Devs
      </S.FooterTitle>
      <SocialShareButtons />
    </S.FooterContent>
  </S.FooterContainer>
);

export default Footer;
