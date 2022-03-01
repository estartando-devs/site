import styled from 'styled-components';
import { Typography } from '../Typography';
import { convertPxToRem } from '../../utils/convertPxToRem';
import Image from 'next/image';

export const CommonQuestionsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 72px 120px 102px;
  gap: 41px;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 32px 16px;
  }
`;

export const CommonQestionsSectionTitle = styled(Typography)`
  span {
    font-size: ${convertPxToRem(48)};
    line-height: ${convertPxToRem(55)};
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    display: flex;
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
  display: grid;
  gap: 64px;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    gap: 32px;
  }
`;

export const Question = styled.div`
  display: grid;
  gap: 24px;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    gap: 16px;
  }
`;
