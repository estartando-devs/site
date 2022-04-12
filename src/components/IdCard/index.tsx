import { Typography } from '../Typography';
import PolygonBox from './components/PolygonBox';
import * as S from './styles';

export type IdCardProps = {
  name: string;
  image: {
    src: string;
    alt: string;
  };
  course: string;
  address: {
    city: string;
    state: string;
  };
};

export const IdCard = ({ name, course, address, image }: IdCardProps) => (
  <S.Container>
    <PolygonBox />
    <S.CardBackground>
      <S.InfoContainer>
        <S.Logo />
        <Typography
          fontSize="5rem"
          lineHeight="4.875rem"
          variant="h1"
          color="#fff"
        >
          {name}
        </Typography>
        <S.LocalContainer>
          <S.PinImage />
          <Typography variant="body1">{`${address?.city} - ${address?.state}`}</Typography>
        </S.LocalContainer>
        <S.CourseContainer>
          <Typography weight="400" variant="body1" color="#b3b3b3">
            Curso no Estartando Devs
          </Typography>
          <Typography weight="700" variant="h2" color="#1EC0D6">
            {course}
          </Typography>
        </S.CourseContainer>
        <Typography weight="500" variant="body2">
          {'< nós estamos transformando o mundo através da tecnologia >'}
        </Typography>
      </S.InfoContainer>
      <S.PhotoContainer>
        <S.ImageContainer>
          <S.Image {...image} />
        </S.ImageContainer>
        <Typography weight="500" variant="body2">
          Estudante 2022 @ <strong>estartandodevs</strong>.com.br
        </Typography>
      </S.PhotoContainer>
    </S.CardBackground>
  </S.Container>
);
