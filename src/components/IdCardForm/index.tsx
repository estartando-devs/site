import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormErrorMessage,
  FormControl,
  Input,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import Cropper from 'react-easy-crop';
import { useCropImage } from '../../hooks/useCropImage';
import { getCroppedImg } from '../../utils/cropImage';
import { Logo } from '../Logo';
import { FileIcon } from './components/FileIcon';
import * as S from './styles';
import { Status } from '../../types';

export const IdCardForm = () => {
  const router = useRouter();
  const theme = useTheme();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
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

  const handleSubmit = ({ email, name }: Record<string, string>) => {
    router.push({ pathname: '/id-card/[email]', query: { email, name } });
  };

  const toast = useToast();

  const handldeUpload = async () => {
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
            description: 'A imagem é muito grande, tente novamente!',
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
      <header>
        <Link href="/">
          <a>
            <Logo width={48} height={68} priority quality={30} />
          </a>
        </Link>
      </header>
      <form onSubmit={onSubmit(handleSubmit)}>
        <S.IdCardSectionTitle variant="h2" color="white">
          Crie seu ID Card personalizado e divulge nas suas redes.
          <br /> <span>Não esqueça de nos marcar \o/</span>
        </S.IdCardSectionTitle>
        <FormControl isInvalid={errors.email}>
          <Input
            placeholder="Nome"
            type="text"
            id="name"
            {...register('name')}
            textColor="white"
          />
          <Input
            placeholder="E-mail"
            type="text"
            id="email"
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Insira um e-mail válido',
              },
            })}
            textColor="white"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <S.FileInput
          type="file"
          max-file-size="1024"
          onChange={onSelectFile}
          id="file-input"
        />
        <S.FileInputLabel htmlFor="file-input">
          <FileIcon />
          <span>Carregar foto</span>
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
          backgroundColor={theme.palette.primary.main}
          isLoading={isSubmitting}
          _hover={{
            backgroundColor: theme.palette.design.green_dark,
          }}
        >
          Criar
        </Button>
      </form>

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
              onClick={() => handldeUpload()}
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
