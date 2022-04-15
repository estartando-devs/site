import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Typography } from '../Typography';
import * as S from './styles';
import { Button } from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { capitalize } from '../../utils/capitalize';

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
  const [imageSrc, setimageSrc] = useState<{
    src: string;
    alt: string;
  }>(image);
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const imageUploaded = JSON.parse(
      sessionStorage.getItem('id-card-image') || '{}'
    );

    if (imageUploaded) {
      setimageSrc((prev) => ({ ...prev, ...imageUploaded.image }));
    }
  }, []);

  const handleDownloadImage = async () => {
    const element = ref?.current;

    if (!element) {
      return;
    }
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      allowTaint: true,
    });
    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <>
      <S.Container>
        <S.CardBackground ref={ref}>
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
                <Typography weight="700" variant="h2" color="#1EC0D6">
                  {capitalize(course)}
                </Typography>
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
        Exportar
      </Button>
    </>
  );
};
