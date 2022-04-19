import { Button } from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { capitalize } from '../../utils';
import { Typography } from '../Typography';
import { useIdCardHandlers } from './idCardHandlers';
import * as S from './styles';

export type IdCardProps = {
  name?: string;
  image?: {
    src: string;
    alt: string;
  };
  course?: string;
  address?: {
    city: string;
    state: string;
  };
};

export const IdCard = ({
  name = 'estartando devs',
  course = 'dev backend',
  address = {
    city: 'rio de janeiro',
    state: 'rj',
  },
  image = {
    src: 'https://res.cloudinary.com/elite-devs/images/logo',
    alt: 'imagem aluno(a)',
  },
}: IdCardProps) => {
  const theme = useTheme();

  const { imageSrc, courseKey, ref, handleDownloadImage } = useIdCardHandlers({
    image,
    course,
  });

  return (
    <>
      <S.Container>
        <S.CardBackground ref={ref} course={courseKey}>
          <S.InfoContainer>
            <S.Logo />
            <div>
              <Typography fontSize="5rem" variant="h1" color="#fff">
                {capitalize(name)}
              </Typography>
              <S.LocalContainer>
                <S.PinImage />
                <Typography variant="body1">{`${capitalize(
                  address?.city
                )} - ${address?.state.toUpperCase()}`}</Typography>
              </S.LocalContainer>
              <S.CourseContainer>
                <Typography weight="400" variant="body1" color="#b3b3b3">
                  Curso no Estartando Devs
                </Typography>
                <S.CourseTitle
                  course={courseKey}
                  weight="700"
                  variant="h2"
                  color="#1EC0D6"
                >
                  {course}
                </S.CourseTitle>
              </S.CourseContainer>
            </div>
            <S.Text weight="500" variant="body2">
              {'< nós estamos transformando o mundo através da tecnologia >'}
            </S.Text>
          </S.InfoContainer>
          <S.PhotoContainer>
            <S.ImageContainer>
              <S.Image {...imageSrc} />
            </S.ImageContainer>
            <S.Text weight="500" variant="body2">
              Estudante 2022 @ <strong>estartandodevs</strong>.com.br
            </S.Text>
          </S.PhotoContainer>
        </S.CardBackground>
      </S.Container>
      <Button
        background={theme.palette.design.purple}
        color={theme.palette.design.white}
        width={230}
        padding="1"
        marginTop="4"
        onClick={handleDownloadImage}
      >
        Baixar ID Card
      </Button>
    </>
  );
};
