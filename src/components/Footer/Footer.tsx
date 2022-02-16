import React from 'react';
import * as S from './FooterStyled';
import { SocialShareButtons } from '../';

const Footer = () => (
  <S.FooterContainer>
    <S.ContainerLogo></S.ContainerLogo>
    <SocialShareButtons />
  </S.FooterContainer>
);

export default Footer;
