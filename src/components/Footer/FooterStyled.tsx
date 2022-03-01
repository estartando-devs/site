import styled from 'styled-components';
import { Typography } from '../Typography';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  border-top: 1px solid ${({ theme }) => theme.palette.gray[2]};
  padding: 80px 0;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 40px 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`;

export const FooterTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.design.white};
`;
