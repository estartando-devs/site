import { Box, Button, Select, useToast } from '@chakra-ui/react';
import { setCookies } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cropper from 'react-easy-crop';
import { FormProvider, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { useCropImage } from '../../hooks/useCropImage';
import { CourseNameByKey, Status } from '../../types';
import { getCroppedImg } from '../../utils/cropImage';
import { Input } from '../Input';
import { Logo } from '../Logo';
import { Typography } from '../Typography';
import { FileIcon } from './components/FileIcon';
import * as S from './styles';

export const IdCardForm = (props: { team?: boolean }) => {
  const router = useRouter();
  const theme = useTheme();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState<Status>('idle');
  const methods = useForm();

  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    onSelectFile,
    image,
    showCopper,
    setShowCopper,
    croppedArea,
  } = useCropImage();

  const handleSubmit = ({ email, name, ...rest }: Record<string, string>) => {
    if (props.team) {
      setCookies('nagato', JSON.stringify({ ...rest }));
      router.push(`/id-card/time/${name}`);
      return;
    }
    router.push({ pathname: '/id-card/[email]', query: { email, name } });
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
  };

  const toast = useToast();

  useEffect(() => {
    methods.setValue('email', sessionStorage.getItem('email') || '');
    methods.setValue('name', sessionStorage.getItem('name') || '');
  }, [methods]);

  const handleUpload = async () => {
    setUploadStatus('loading');
    const canvas = await getCroppedImg(image, croppedArea);
    const reader = new FileReader();
    canvas?.toBlob((blob) => {
      reader.readAsDataURL(blob as Blob);
      reader.onloadend = () => {
        const uploaded_image = reader.result;
        try {
          sessionStorage.setItem(
            'id-card-image',
            JSON.stringify({
              image: {
                src: uploaded_image,
              },
            })
          );
          setShowCopper(false);
          setUploadStatus('success');
          toast({
            position: 'top',
            title: 'Succeso!',
            description: 'A imagem foi carregada com sucesso!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          setUploadStatus('error');
          toast({
            position: 'top',
            title: 'Imagem maior que 1MB!',
            description:
              'A imagem é muito grande, aplique zoom ou tente novamente com outra imagem! ',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const storageImage = sessionStorage.getItem('id-card-image');

      if (storageImage) {
        const value = JSON.parse(storageImage);
        setImagePreview(value.image.src);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Container>
      <S.Header>
        <Link href="/">
          <a>
            <Logo width={91} height={138} priority quality={30} />
          </a>
        </Link>
        <S.ContainerHeading>
          <Typography variant="h1">Estartando Devs</Typography>
          <Typography variant="h2">
            ID CARD <span>2022</span>
          </Typography>
        </S.ContainerHeading>
      </S.Header>
      <FormProvider {...methods}>
        <S.Form onSubmit={methods.handleSubmit(handleSubmit)}>
          <S.IdCardSectionTitle variant="h2" color="white">
            Crie seu ID Card personalizado e divulge nas suas redes.
          </S.IdCardSectionTitle>
          <Input placeholder="Nome" type="text" id="name" name="name" />
          {props.team && (
            <>
              <Input
                placeholder="CEP"
                type="text"
                id="zipcode"
                name="zipcode"
              />
              <Select
                {...methods.register('course')}
                placeholder="Selecione"
                name="course"
                color={theme.palette.design.white}
              >
                {Object.entries(CourseNameByKey).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </Select>
            </>
          )}
          {!props.team && (
            <Input
              placeholder="E-mail"
              type="text"
              id="email"
              name="email"
              validation={{
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Insira um e-mail válido',
                },
              }}
            />
          )}
          <S.FileInput
            type="file"
            max-file-size="1024"
            onChange={onSelectFile}
            id="file-input"
          />
          <S.FileInputLabel htmlFor="file-input">
            <S.ContainerInputFileContent>
              <Typography
                variant="body3"
                color={theme.palette.primary.main}
                weight="bold"
              >
                Enviar foto
              </Typography>
              <FileIcon />
            </S.ContainerInputFileContent>
          </S.FileInputLabel>
          <Box margin="0 auto">
            {imagePreview && (
              <S.ImagePreview
                layout="fixed"
                src={imagePreview}
                alt="Preview"
                width="100%"
                height="100%"
                objectFit="contain"
              />
            )}
          </Box>
          <Button
            type="submit"
            color={theme.palette.design.white}
            backgroundColor={theme.palette.design.purple}
            _hover={
              imagePreview
                ? {
                    opacity: 0.9,
                  }
                : {}
            }
            disabled={!imagePreview}
          >
            Criar ID Card
          </Button>
        </S.Form>
      </FormProvider>
      {showCopper && (
        <S.ContainerCropper>
          <S.CropperWrapper>
            <Cropper
              image={image as string}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
            />
          </S.CropperWrapper>
          <S.CropperActionsContainer>
            <Button
              color={theme.palette.design.white}
              backgroundColor={theme.palette.design.purple}
              isLoading={uploadStatus === 'loading'}
              onClick={handleUpload}
            >
              Salvar
            </Button>
            <Button onClick={() => setShowCopper(false)}>Cancelar</Button>
          </S.CropperActionsContainer>
        </S.ContainerCropper>
      )}
    </S.Container>
  );
};
