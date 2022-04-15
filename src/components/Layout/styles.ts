import styled, { css } from 'styled-components';

export const Container = styled.main<{ full: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.default};
  width: 100%;
  ${(props) =>
    props.full &&
    css`
      height: 100vh;
    `}
`;
