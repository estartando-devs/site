import styled from 'styled-components';
import { LinkWrapper } from '../LinkWrapper';
import { Typography } from '../Typography';

export const ContainerSubscribe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3.125rem;
  padding: 5.4rem 7.5rem 11.8rem;

  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    padding: 0 1rem 8.4rem;
    img {
      display: none !important;
    }
  }
`;

export const ContainerSubscribeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    align-items: center;
  }
`;

export const ContainerSubscribeContentText = styled(Typography).attrs({
  variant: 'h2',
})`
  font-size: 3rem;
`;

export const ContainerSubscribeContentButton = styled(LinkWrapper)`
  margin-top: 1.5rem;
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
