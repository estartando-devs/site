import Image from 'next/image';
import { Typography } from '../Typography';
import * as S from './styles';

export const IdCard = () => (
  <S.Container>
    <svg width="0" height="0">
      <defs>
        <clipPath id="hexagon" clipPathUnits="objectBoundingBox">
          <polygon
            points=".41,.02 .59,.02
                       .91,.16 1,.33
                       1,.66 .91,.83
                       .59,.98 .41,.98
                       .09,.83 0,.66
                       0,.33 .09,.16
                       "
          />
          <circle cx=".5" cy=".2" r=".2" />
          <circle cx=".5" cy=".8" r=".2" />
          <circle cx=".8" cy=".33" r=".2" />
          <circle cx=".8" cy=".66" r=".2" />
          <circle cx=".2" cy=".33" r=".2" />
          <circle cx=".2" cy=".66" r=".2" />
        </clipPath>
      </defs>
    </svg>
    <S.CardBackground>
      <S.InfoContainer>
        <S.Logo />
        <Typography
          fontSize="5rem"
          lineHeight="4.875rem"
          variant="h1"
          color="#fff"
        >
          Maria Maria de Jesus
        </Typography>
        <S.LocalContainer>
          <S.PinImage />
          <Typography variant="body1">Rio de Janeiro - RJ</Typography>
        </S.LocalContainer>
        <S.CourseContainer>
          <Typography weight="400" variant="body1" color="#b3b3b3">
            Curso no Estartando Devs
          </Typography>
          <Typography weight="700" variant="h2" color="#1EC0D6">
            Dev Back-end
          </Typography>
        </S.CourseContainer>
        <Typography weight="500" variant="body2">
          {'< nós estamos transformando o mundo através da tecnologia >'}
        </Typography>
      </S.InfoContainer>
      <S.PhotoContainer>
        <S.ImageContainer>
          <S.Image />
        </S.ImageContainer>
        <Typography weight="500" variant="body2">
          Estudante 2022 @ <strong>estartandodevs</strong>.com.br
        </Typography>
      </S.PhotoContainer>
    </S.CardBackground>
  </S.Container>
);
