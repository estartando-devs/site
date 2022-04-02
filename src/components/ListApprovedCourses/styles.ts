import styled from 'styled-components';
import { Typography } from '../Typography';

type StyleProps = {
  bgColor: 'green_dark' | 'blue_dark' | 'purple';
  width?: string;
};

export const CourseContainer = styled.section`
  width: 100%;
  padding: 0 7.5rem;
  margin-top: 6.25rem;
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    padding: 2rem 2rem 2.7rem;
    margin-top: 3rem;
  }

  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 6.25rem auto 0;
  }
`;

export const TitleContainer = styled.div<StyleProps>`
  background-color: ${({ theme, bgColor }) => theme.palette.design[bgColor]};
  max-width: ${({ width }) => width || '350px'};
  height: 1.4rem;
  position: relative;

  > p {
    position: absolute;
    top: -13px;
    left: 10px;
    @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
      top: -10px;
    }
  }
`;

export const ModulesText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.design.white};
`;

export const ModulesTextContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3.125rem;
  cursor: pointer;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    margin-top: 1.3rem;
  }
`;

export const ListModulesContainer = styled.ul`
  margin: 0.625rem 0 1rem 0;
  padding-left: 2rem;

  > li {
    color: ${({ theme }) => theme.palette.design.white};
    line-height: 2;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const TitleCheckout = styled(Typography).attrs({
  variant: 'h2',
})``;

export const TitleApproved = styled(Typography).attrs({
  variant: 'h2',
})`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.design.purple};
`;

export const ListApprovedContainer = styled.div``;
