import styled from 'styled-components';
import { Typography } from '..';

export const CardContainer = styled.div<{ variation: 'right' | 'left' }>`
  width: 20rem;
  height: 6.2rem;
  padding: 0 0.9rem;
  position: relative;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.palette.gray[1]};
  box-shadow: 0.3rem 0.3rem 0.5rem -0.3rem rgb(0 0 0 / 98%),
    ${({ theme }) =>
      `-0.1rem -0.1rem 0.3rem -0.3rem ${theme.palette.design.white}`};
  align-self: ${({ variation }) =>
    variation === 'right' ? 'flex-end' : 'flex-start'};
`;

export const TextCharacteristics = styled(Typography).attrs({
  variant: 'body2',
})`
  font-weight: 400;
`;

export const Division = styled.div`
  background-color: ${({ theme }) => theme.palette.gray[3]};
  height: 60%;
  width: 0.06rem;
`;

export const FormatContainerLeft = styled.div`
  width: 2.625rem;
  height: 0.812rem;
  background-color: ${({ theme }) => theme.palette.gray[1]};
  position: absolute;
  top: -0.275rem;
  left: 0;
  box-shadow: ${({ theme }) =>
    `-0.25rem -0.125rem 0.312rem -0.375rem ${theme.palette.design.white}`};
  border-top-right-radius: 1.375rem;
  border-top-left-radius: 0.312rem;
  transform: rotateZ(16deg);
`;

export const FormatContainerRight = styled.div`
  width: 2.625rem;
  height: 0.81rem;
  background-color: ${({ theme }) => theme.palette.gray[1]};
  position: absolute;
  top: -0.3125rem;
  right: 0.125rem;
  box-shadow: ${({ theme }) =>
    `0.1875rem -0.1875rem 0.1875rem -0.3125rem ${theme.palette.design.white}`};
  border-top-left-radius: 1.375rem;
  border-top-right-radius: 0.3125rem;
  transform: rotateZ(-17deg);
`;
