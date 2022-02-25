import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.palette.gray[1]};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  border-radius: 4px;
  filter: drop-shadow(${({ theme }) => theme.shadows[1]});
  filter: drop-shadow(${({ theme }) => theme.shadows[2]});
`;
