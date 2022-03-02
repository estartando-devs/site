import styled from 'styled-components';
import { Typography } from '..';

export const Container = styled.main`
  display: flex;
  align-items: center;
  padding-left: 120px;
  height: 100vh;
  width: 100%;
  background-image: url(https://res.cloudinary.com/estartando-devs/images/perfil-aluno-bg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;
  background-color: aliceblue;
`;

export const TextBox = styled.div`
  width: 585px;
  height: 532px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;

export const TitleProfile = styled(Typography).attrs({
  variant: 'h2',
  weight: '600',
})`
  margin: 20px 0;
  color: ${({ theme }) => theme.palette.design.white};
`;

export const SubtitleProfile = styled(Typography).attrs({
  variant: 'subtitle1',
})``;

export const DescriptionProfile = styled(Typography).attrs({
  variant: 'body1',
})`
  font-weight: normal;
  line-height: 27px;
  strong {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FeaturedText = styled.p`
  color: ${({ theme }) => theme.palette.design.green};
`;
