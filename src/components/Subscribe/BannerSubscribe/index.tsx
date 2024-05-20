import { LinkWrapper } from '../../LinkWrapper';
import * as S from './styles';

export const BannerSubscribe = () => (
  <S.BannerApprovedContainer>
    <S.BannerContent>
      <S.BannerTitle variant="h2">A inscrições estão abertas!</S.BannerTitle>
      <S.ContainerButton>
        <LinkWrapper
          color="white"
          href={process.env.NEXT_PUBLIC_INSCRICOES_URL || ''}
          legacyBehavior
        >
          <S.BannerButton>Inscreva-se!</S.BannerButton>
        </LinkWrapper>
      </S.ContainerButton>
    </S.BannerContent>
  </S.BannerApprovedContainer>
);
