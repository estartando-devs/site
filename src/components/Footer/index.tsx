import React from 'react';
import { SocialShareButtons } from './SocialShareButtons';
import * as S from './styles';
import { Typography } from '../Typography';

import { Logo } from '../Logo';
import Link from 'next/link';

export const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <Link href="/">
        <a>
          <Logo width={65} height={94} />
        </a>
      </Link>
      <S.FooterContent>
        <Typography variant="body1" weight="700">
          Estartando Devs
        </Typography>
        <SocialShareButtons />
      </S.FooterContent>
    </S.FooterContainer>
    <S.DoubtsLinkWrapper>
      <Typography variant="body3">{`Dúvidas? Veja as`}</Typography>
      <S.DoubtsLink>
        <Link href="/perguntas-frequentes">{`perguntas mais frequentes`}</Link>
      </S.DoubtsLink>
    </S.DoubtsLinkWrapper>
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
