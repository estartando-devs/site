import styled from 'styled-components';
import { Typography } from '..';

export const Container = styled.main`
  display: flex;
  align-items: center;
  padding-left: 7.5rem;
  height: 100vh;
  width: 100%;
  background-image: url(https://res.cloudinary.com/estartando-devs/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1645818507/images/perfil-aluno-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    flex-direction: column;
    padding-left: 0px;
    height: 35rem;
    background-position: 85%;
  }
`;

export const TextBox = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    width: 95%;
    justify-content: center;
  }
`;

export const TitleProfile = styled(Typography).attrs({
  variant: 'h2',
  weight: '600',
})`
  margin: 1.25rem 0;
  color: ${({ theme }) => theme.palette.design.white};

  strong {
    color: ${({ theme }) => theme.palette.design.green};
    font-family: 'Ubuntu';
    font-weight: 800;
    font-size: 3rem;
    line-height: 4rem;
  }
`;

export const DescriptionProfile = styled(Typography).attrs({
  variant: 'body1',
})`
  font-weight: normal;
  line-height: 1.7rem;
  font-size: 1.25rem;
  strong {
    color: ${({ theme }) => theme.palette.primary.main};

    @media (max-width: ${({ theme: { media } }) => media.tablet}) {
      text-align: left;
    }
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    font-weight: normal;
    font-size: 1.4rem;
  }
`;
