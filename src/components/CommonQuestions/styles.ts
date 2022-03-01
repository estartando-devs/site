import styled from 'styled-components';
import { Typography } from '../Typography';
import Image from 'next/image';

export const CommonQuestionsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4.5rem 7.5rem 6.4rem;
  gap: 3rem;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 2.7rem 2rem;
  }
`;

export const CommonQestionsSectionTitle = styled(Typography)`
  span {
    font-size: 3rem;
    line-height: 3.5rem;
    color: ${({
      theme: {
        palette: {
          design: { purple },
        },
      },
    }) => purple};
  }
`;

export const QestionsContent = styled.aside`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    justify-content: flex-start;
    img {
      display: none !important;
    }
  }
`;

export const CommonQestionsIlustration = styled(Image)`
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    display: none !important;
    width: 0 !important;
  }
`;

export const QuestionsWrapper = styled.div`
  width: 50%;
  display: grid;
  gap: 3.75rem;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    gap: 2.75rem;
    width: 100%;
  }
`;

export const Question = styled.div`
  display: grid;
  gap: 2rem;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    gap: 1rem;
  }
`;
