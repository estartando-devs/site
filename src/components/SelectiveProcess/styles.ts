import styled from 'styled-components';
import { Typography } from '../Typography';
import Image from 'next/image';

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 6.4rem 7.5rem;
  gap: 3rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    padding: 2.7rem 2rem;
  }
`;

export const Title = styled(Typography)`
  span {
    font-size: 3rem;
    line-height: 3.6rem;
    color: ${({
      theme: {
        palette: {
          design: { green },
        },
      },
    }) => green};
  }
`;

export const Text = styled(Typography)`
  span {
    color: ${({
      theme: {
        palette: {
          design: { purple },
        },
      },
    }) => purple};
  }
`;

export const ScheduleItem = styled(Typography)<{ disabled?: boolean }>`
  color: ${({ theme: { palette }, disabled }) =>
    disabled ? palette.gray[3] : palette.design.green};
  span {
    font-weight: 300;
  }
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    height: 4rem;
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
`;

export const ScheduleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3rem;
  padding: 3.125rem 1.375rem;

  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    grid-gap: 1rem;
  }

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    grid-gap: 1.625rem;
  }
`;

export const ScheduleDotsWrapper = styled.div`
  padding: 3.75rem 0.75rem;
  border-radius: 1.25rem;
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  grid-gap: 0.625rem;
  box-shadow: 3.42744px 3.42744px 3.42744px rgba(0, 0, 0, 0.25),
    inset 8.56859px 8.56859px 17.1372px rgba(196, 196, 196, 0.03);
  background-color: ${({
    theme: {
      palette: { gray },
    },
  }) => gray[4]};
`;

export const ScheduleDot = styled.div<{ disabled?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({
    theme: {
      palette: {
        gray,
        design: { green },
      },
    },
    disabled,
  }) => (disabled ? gray[3] : green)};
`;

export const ScheduleLittleDot = styled.div<{ disabled?: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 7px;
  background-color: ${({
    theme: {
      palette: { gray },
    },
  }) => gray[3]};
`;

export const Ilustration = styled(Image)`
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    display: none !important;
    width: 0 !important;
  }
`;
