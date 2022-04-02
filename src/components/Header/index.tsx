import { Logo } from '../Logo';
import { LinkWrapper } from '../LinkWrapper';
import { Typography } from '../Typography';
import * as S from './styles';

const Header = () => (
  <S.ContainerHeader>
    <S.SectionHeader>
      <S.ContainerImage>
        <Logo width={91} height={132} priority />
      </S.ContainerImage>
      <S.ContainerHeading>
        <Typography variant="h1">Estartando Devs</Typography>
        <Typography weight="400">
          Transformando o mundo através da tecnologia
        </Typography>
        <S.ContainerButton>
          <LinkWrapper href={process.env.NEXT_PUBLIC_INSCRICOES_URL || '/'}>
            <a target="_blank" rel="noreferrer noopener">
              Faça parte!
            </a>
          </LinkWrapper>
        </S.ContainerButton>
      </S.ContainerHeading>
    </S.SectionHeader>
  </S.ContainerHeader>
);

export { Header };
