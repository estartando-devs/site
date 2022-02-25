import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => {
    theme.palette.gray[1];
  }};
  box-shadow: -1px -1px 3px rgba(123, 122, 122, 0.3),
    1px 1px 3px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  filter: drop-shadow(-1px -1px 3px rgba(123, 122, 122, 0.3));
  filter: drop-shadow(-1px -1px 3px rgba(0, 0, 0, 0.3));
`;
