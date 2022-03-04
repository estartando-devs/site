import styled from 'styled-components';
import { Typography } from '../Typography';

export const HowWeDoContainer = styled.section`
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};
  padding: 4rem 7.5rem 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;

  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 0 auto;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    padding: 2rem 2rem 2.7rem;
    justify-items: center;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ExplainingHowWeDo = styled.div``;

export const TitleHowWeDo = styled(Typography).attrs({ variant: 'h2' })`
  span {
    color: ${({ theme }) => theme.palette.design.green};
    font-size: 3.2rem;
  }
`;

export const ContentHowWeDo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TextHowWeDo = styled(Typography).attrs({ variant: 'body2' })`
  color: ${({ theme }) => theme.palette.design.white};
  strong {
    color: ${({ theme }) => theme.palette.design.green};
  }
`;

export const CardListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24rem;
  gap: 1.6rem;
`;
