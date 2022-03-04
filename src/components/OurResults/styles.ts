import styled from 'styled-components';
import { Typography } from '../Typography';

export const OurResultsContainer = styled.section`
  background-image: linear-gradient(
      0deg,
      ${({ theme: { palette } }) => palette.design.black_transparent},
      ${({ theme: { palette } }) => palette.design.black_transparent}
    ),
    url('https://res.cloudinary.com/estartando-devs/image/upload/v1645815667/images/nossos-resultados-bg');
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
  padding: 0 120px;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 48px 16px;
  }
`;

export const OurResultsContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1116px;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    align-items: center;
  }
`;

export const OurResultsContainerTitleResults = styled(Typography)`
  font-size: 48px;
  font-weight: 700px;
  line-height: 65.37px;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ theme: { palette } }) =>
    palette.design.white};

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    -webkit-text-stroke-width: 1.5px;
    font-size: 32px;
  }
`;

export const OurResultsContainerContent = styled.div`
  width: 100%;
  margin: 0 120px;
  display: flex;
  justify-content: space-evenly;
  max-width: 1116px;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    flex-direction: column;
    gap: 50px;
  }
`;
