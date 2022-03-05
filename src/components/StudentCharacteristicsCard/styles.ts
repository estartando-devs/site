import styled, { css } from 'styled-components';
import { Typography } from '../Typography';

const commonStylesInCurvature = css`
  width: 2.625rem;
  height: 0.81rem;
  background-color: ${({ theme }) => theme.palette.gray[1]};
  position: absolute;
`;

export const CardContainer = styled.div`
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

  &:nth-child(even) {
    align-self: flex-start;
    .curvature {
      ${commonStylesInCurvature}
      top: -0.275rem;
      left: 0;
      box-shadow: ${({ theme }) =>
        `-0.25rem -0.125rem 0.312rem -0.375rem ${theme.palette.design.white}`};
      transform: rotateZ(16deg);
    }
  }

  &:nth-child(odd) {
    align-self: flex-end;
    .curvature {
      ${commonStylesInCurvature}
      top: -0.3125rem;
      right: 0.125rem;
      box-shadow: ${({ theme }) =>
        `0.1875rem -0.1875rem 0.1875rem -0.3125rem ${theme.palette.design.white}`};
      transform: rotateZ(-17deg);
    }
  }
`;

export const TextCharacteristics = styled(Typography).attrs({
  variant: 'body2',
})`
  font-weight: 400;
`;

export const Division = styled.hr`
  border-color: ${({ theme }) => theme.palette.gray[3]};
  height: 60%;
  width: 0.06rem;
`;
