import styled from 'styled-components';
import { Typography } from '..';

export const Container = styled.main`
  display: flex;
  align-items: center;

  padding-left: 7.5rem;
  height: 100vh;
  width: 100%;
  background-image: url(https://res.cloudinary.com/estartando-devs/images/perfil-aluno-bg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;
  background-color: aliceblue;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    background: none;
    flex-direction: column;
    padding-left: 0px;
    margin-top: 7.5rem;
  }
`;

export const TextBox = styled.div`
  width: 585px;
  height: 532px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    width: 25rem;
  }
`;

export const TitleProfile = styled(Typography).attrs({
  variant: 'h2',
  weight: '600',
})`
  margin: 20px 0;
  color: ${({ theme }) => theme.palette.design.white};

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    text-align: center;
  }
`;

export const SubtitleProfile = styled(Typography).attrs({
  variant: 'subtitle1',
})`
  margin-bottom: 80px;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    text-align: center;
  }
`;

export const DescriptionProfile = styled(Typography).attrs({
  variant: 'body1',
})`
  font-weight: normal;
  line-height: 27px;
  margin-bottom: 50px;
  strong {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FeaturedText = styled.p`
  color: ${({ theme }) => theme.palette.design.green};
`;
