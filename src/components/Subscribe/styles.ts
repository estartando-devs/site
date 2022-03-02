import styled from 'styled-components';

import { LinkWrapper } from '../LinkWrapper';
import { Typography } from '../Typography';

export const ContainerSubscribe = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  padding: 0 120px;

  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    flex-direction: column;
    padding: 48px 16px;
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
})`
  font-size: 3rem;
`;

export const ContainerSubscribeContentButton = styled(LinkWrapper)`
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
  a {
    color: ${({ theme }) => theme.palette.design.white};
  }
`;
