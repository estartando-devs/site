import styled, { css } from 'styled-components';

export const ContainerField = styled.div`
  position: relative;
  padding: 1rem 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: -1rem;
  display: block;
  transition: 0.2s;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
`;

export const Input = styled.input<{
  isError?: boolean;
}>`
  all: unset;
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.design.white};
  padding: 0.35rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.palette.design.white};
  background: transparent;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  ${({ isError, theme }) =>
    isError &&
    css`
      border: 1px solid ${theme.palette.design.orange};
    `}
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.palette.design.orange};
`;
