import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  padding: 0 7.5rem;
  gap: 5rem;
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};

  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 4rem auto 0;
  }

  @media (max-width: ${({ theme: { media } }) => media.laptops_landscape}) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
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

  span {
    color: ${({ theme }) => theme.palette.design.green};
  }
`;
