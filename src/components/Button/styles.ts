import styled from 'styled-components';
import { convertPxToRem } from '../../utils/convertPxToRem';

export const Wrapper = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${convertPxToRem(14)} 0;
  font-size: ${convertPxToRem(17)};
  font-weight: bold;

  background: ${({ theme }) => theme.palette.design.purple};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: ${({ theme }) => `${theme.radius.default}px`};
  color: ${({ theme }) => theme.palette.design.white};
`;
