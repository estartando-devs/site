import React from 'react';
import Image from 'next/image';
import { SocialShareButtons } from './SocialShareButtons';
import * as S from './FooterStyled';

const Footer = () => (
  <S.FooterContainer>
    <Image
      src="/images/logo"
      width={65}
      height={94}
      alt="Logo estartando devs"
      title="Logo estartando devs."
    />
    <S.FooterContent>
      <S.FooterTitle variant="body1" weight="700">
        Estartando Devs
      </S.FooterTitle>
      <SocialShareButtons />
    </S.FooterContent>
  </S.FooterContainer>
);

export default Footer;
