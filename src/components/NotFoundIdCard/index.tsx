import { Button } from '@chakra-ui/react';
import { Error } from '@styled-icons/boxicons-regular';
import Router from 'next/router';
import { useTheme } from 'styled-components';
import { Typography } from '../Typography';
import * as S from './styles';

export const NotFoundIdCard = () => {
  const theme = useTheme();

  const { push } = Router;

  return (
    <S.Container>
      <Error color={theme.palette.design.orange} width={200} height={200} />
      <Typography variant="h1">Oops! Página não encontrada.</Typography>
      <Button
        backgroundColor={theme.palette.design.green}
        onClick={() => push('/id-card')}
      >
        Voltar
      </Button>
    </S.Container>
  );
};
