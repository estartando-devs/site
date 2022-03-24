import styled from 'styled-components';
import { Typography } from '../Typography';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FooterContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.palette.gray[2]};
  padding: 5rem 0 1rem;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 2.5rem 0 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
`;

export const DoubtsLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.3125rem;
  p {
    white-space: nowrap;
  }
`;

export const DoubtsLink = styled(Typography).attrs({
  variant: 'body3',
})`
  border-bottom: 1px solid ${({ theme: { palette } }) => palette.design.purple};
  cursor: pointer;
  a {
    color: ${({ theme }) => theme.palette.design.white};
  }
`;

export const CopyContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0.625rem;
`;

export const CopyText = styled(Typography)`
  &::before {
    content: '•';
    display: inline-block;
    margin: 0px 0.4rem;
  }
`;
