import Image from 'next/image';
import { LinkWrapper } from '../LinkWrapper';
import { Typography } from '../Typography';
import * as S from './styles';

const Header = () => (
  <S.ContainerHeader>
    <S.SectionHeader>
      <S.ContainerImage>
        <Image
          src="/images/logo"
          width={91}
          height={132}
          alt="Logo estartando devs"
          title="Logo estartando devs."
          priority
        />
      </S.ContainerImage>
      <S.ContainerHeading>
        <Typography variant="h1">Estartando Devs</Typography>
        <Typography weight="400">
          Transformando o mundo através da tecnologia
        </Typography>
        <S.ContainerButton>
          <LinkWrapper href="/">Faça parte!</LinkWrapper>
        </S.ContainerButton>
      </S.ContainerHeading>
    </S.SectionHeader>
  </S.ContainerHeader>
);

export { Header };
