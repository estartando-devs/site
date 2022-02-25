import styled, { css } from 'styled-components';
import { convertPxToRem } from '../../utils/convertPxToRem';

type ColorProps = {
  color?: 'primary' | 'purple';
};

export const ContainerLink = styled.div<ColorProps>`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${convertPxToRem(17)};
  font-weight: bold;

  ${({ color, theme }) => css`
    background-color: ${color === 'primary' && theme.palette.primary.main};
    background-color: ${color === 'purple' && theme.palette.design.purple};
  `}

  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: ${({ theme }) => `${theme.radius.default}px`};
  width: 100%;

  a {
    width: 100%;
    text-align: center;
    padding: ${convertPxToRem(14)} 0;
    color: ${({ theme }) => theme.palette.design.white};
    text-decoration: none;
  }
`;
