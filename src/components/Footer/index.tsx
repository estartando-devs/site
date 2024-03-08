import Link from 'next/link';
import { Logo } from '../Logo';
import { Typography } from '../Typography';
import { SocialShareButtons } from './SocialShareButtons';
import * as S from './styles';

export const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <Link href="/">
        <Logo width={65} height={94} />
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
        <Link
          href="/perguntas-frequentes"
          legacyBehavior
        >{`perguntas mais frequentes`}</Link>
      </S.DoubtsLink>
    </S.DoubtsLinkWrapper>
    <S.CopyContainer>
      <Typography variant="body3" weight="400">
        {`© Estartando Devs ${new Date().getFullYear()}`}
      </Typography>
      <S.CopyText variant="body3" weight="400">
        Todos os direitos reservados.
      </S.CopyText>
    </S.CopyContainer>
  </S.FooterWrapper>
);
