import styled from 'styled-components';
import { convertPxToRem } from '../../utils/convertPxToRem';

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(30, 30, 30, 0.8),
      rgba(30, 30, 30, 0.8)
    ),
    url('https://res.cloudinary.com/estartando-devs/image/upload/v1645815667/images/header-bg.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 120px;

  @media (max-width: 425px) {
    padding: 0 16px;
  }
`;

export const SectionHeader = styled.section`
  display: flex;
  gap: 48px;
  align-items: flex-start;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.picture`
  margin-top: 20px;

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const ContainerHeading = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  h1 {
    margin-bottom: 16px;
    @media (max-width: 425px) {
      font-size: ${convertPxToRem(32)};
      margin: 0;
    }
  }

  p {
    @media (max-width: 425px) {
      font-size: ${convertPxToRem(16)};
    }
  }
`;

export const ContainerButton = styled.div`
  margin-top: 48px;
  max-width: 241px;
`;
