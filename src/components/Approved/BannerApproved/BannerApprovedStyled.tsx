import styled from 'styled-components';
import { Typography } from '../../Typography';

export const BannerApprovedContainer = styled.div`
  padding: 70px 100px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette?.design?.purple};

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  max-width: 1028px;
  display: flex;
  flex-direction: column;
`;

export const BannerTitle = styled(Typography).attrs({
  variant: 'h2',
  weight: 'bold',
})`
  margin-bottom: 15px;
`;

export const BannerDescription = styled(Typography).attrs({
  variant: 'body1',
  weight: '400',
})`
  margin-bottom: 30px;
`;

export const BannerButton = styled.a`
  color: ${(props) => props.theme.palette?.design?.purple} !important;
  max-width: 470px;
`;

export const ContainerButton = styled.div`
  max-width: 15rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    max-width: 100%;
  }
`;
