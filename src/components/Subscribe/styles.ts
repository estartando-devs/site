import styled from 'styled-components';

import { LinkWrapper } from '../LinkWrapper';
import { Typography } from '../Typography';

export const ContainerSubscribe = styled.section`
  width: 100%;
  height: 424px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  padding: 0 120px;

  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    flex-direction: column;
    height: 900px;
    padding: 0;
  }
`;

export const ContainerSubscribeImage = styled.div`
  min-width: 200px;
  width: 294px;
  height: 364px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    flex-direction: column;
    height: 1200px;
    width: 100px;
  }
`;

export const ContainerSubscribeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerSubscribeContentText = styled(Typography).attrs({
  variant: 'h2',
})``;

export const ContainerSubscribeContentButton = styled(LinkWrapper).attrs({
  color: 'purple',
  href: '',
})`
  margin: 70px 0 30px 0;
  max-width: 242px;
`;

export const ContainerSubscribeContentDoubts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  p {
    white-space: nowrap;
  }
`;

export const ContainerSubscribeContentDoubtsLink = styled(Typography).attrs({
  variant: 'body3',
})`
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.design.purple};
  cursor: pointer;
`;
