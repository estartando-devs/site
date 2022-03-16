import styled from 'styled-components';
import { Typography } from '../Typography';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('perfil-aluno-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: local;

  @media (max-width: ${({ theme: { media } }) => media.desktop_hd}) {
    height: 100%;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    background-position: 85%;
    height: auto;
  }
`;

export const ContentStudentProfile = styled.div`
  display: flex;
  align-items: center;

  padding-left: 7.5rem;
  width: 100%;
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};
  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 0 auto;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    flex-direction: column;
    padding: 1rem 1rem 2.25rem;
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
    height: 100%;
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
  color: ${({ theme }) => theme.palette.design.white};

  ul {
    padding-left: 2rem;
  }

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
