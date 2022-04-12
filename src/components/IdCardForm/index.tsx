import {
  Box,
  Button,
  FormErrorMessage,
  FormControl,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
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

  const handleSubmit = ({ email }: Record<string, string>) => {
    router.push({ pathname: '/id-card/[email]', query: { email } });
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
      <Heading color="white">
        Crie seu ID Card personalizado e divulge nas suas redes.
        <br /> Não esqueça de nos marcar.
      </Heading>
      <form onSubmit={onSubmit(handleSubmit)}>
        <FormControl isInvalid={errors.email}>
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
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="upload"
            className="svg-inline--fa fa-upload fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg>
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
