import { useEffect, useRef, useState } from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
// import html2canvas from 'html2canvas';
import { Typography } from '../Typography';
import PolygonBox from './components/PolygonBox';
import * as S from './styles';
import { Button } from '@chakra-ui/react';
import { useTheme } from 'styled-components';

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

  useEffect(() => {
    const imageUploaded = JSON.parse(
      sessionStorage.getItem('id-card-image') || '{}'
    );

    if (imageUploaded) {
      setimageSrc((prev) => ({ ...prev, ...imageUploaded.image }));
    }
  }, []);

  const ref = useRef(null);

  const theme = useTheme();

  // const handleDownloadImage = async () => {
  //   const element = ref?.current;

  //   if (!element) {
  //     return;
  //   }
  //   const canvas = await html2canvas(element);
  //   const data = canvas.toDataURL('image/png');
  //   const link = document.createElement('a');

  //   if (typeof link.download === 'string') {
  //     link.href = data;
  //     link.download = 'image.png';

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(data);
  //   }
  // };

  return (
    <>
      <S.Container ref={ref}>
        <PolygonBox />
        <S.CardBackground>
          <S.InfoContainer>
            <S.Logo />
            <Typography fontSize="4rem" variant="h1" color="#fff">
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
              <S.Image {...imageSrc} />
            </S.ImageContainer>
            <Typography weight="500" variant="body2">
              Estudante 2022 @ <strong>estartandodevs</strong>.com.br
            </Typography>
          </S.PhotoContainer>
        </S.CardBackground>
      </S.Container>
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <Button
              background={theme.palette.primary.main}
              width={230}
              onClick={handlePrint}
            >
              Exportar
            </Button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      {/* <Button width={200} onClick={handleDownloadImage}>
        Exportar
      </Button> */}
    </>
  );
};
