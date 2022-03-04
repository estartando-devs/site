import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  gap: 9rem;
  width: 100%;
  height: 100vh;
  padding: 0 7.5rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    flex-direction: column;
    margin-top: 4rem;
    padding: 0 2rem;
  }
`;

export const HeadingSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 29rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    width: 100%;

    h2 {
      text-align: center;
    }
  }
`;

export const MarkedText = styled.span`
  color: ${({ theme }) => theme.palette.design.green};
`;
