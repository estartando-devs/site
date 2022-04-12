import {
  Box,
  Button,
  FormErrorMessage,
  FormControl,
  Input,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Logo } from '../Logo';
import { FileIcon } from './components/FileIcon';
import * as S from './styles';

export const IdCardForm = () => {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [imagePreview, setImagePreview] = useState<Blob | MediaSource>();
  const router = useRouter();
  const theme = useTheme();

  const handleSubmit = ({ email, name }: Record<string, string>) => {
    router.push({ pathname: '/id-card/[email]', query: { email, name } });
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      sessionStorage.setItem(
        'id-card-image',
        JSON.stringify({
          image: {
            src: uploaded_image,
          },
        })
      );
    });
    if (
      event.target.files &&
      event.target.files[0] &&
      event.target.files[0].size > 80000
    ) {
      return alert('O arquivo é muito grande');
    }
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setImagePreview(event.target.files[0]);
    }
  };

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
          onChange={handleUpload}
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
              src={URL.createObjectURL(imagePreview)}
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
      <S.ImagePreviewContainer />
    </S.Container>
  );
};
