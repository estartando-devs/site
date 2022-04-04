import { Logo } from '../Logo';
import { Typography } from '../Typography';
import * as S from './styles';

export const Header = () => (
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
      </S.ContainerHeading>
    </S.SectionHeader>
  </S.ContainerHeader>
);
