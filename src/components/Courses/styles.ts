import styled from 'styled-components';

type StyleProps = {
  bgColor?: string;
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
  background-color: ${({ bgColor }) => bgColor};
  max-width: ${({ width }) => width};
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

export const IntroText = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.palette.design.white};
  line-height: 2;
`;
export const ModulesTextContainer = styled.details`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3.125rem;
  cursor: pointer;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    margin-top: 1.3rem;
  }

  &[open] {
    summary {
      svg:first-child {
        display: initial;
      }
      svg:last-child {
        display: none;
      }
    }
  }
`;

export const ModulesText = styled.summary`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.design.white};
  list-style: none;
  &::marker,
  &::-webkit-details-marker {
    display: none;
  }

  svg:first-child {
    display: none;
  }
  svg {
    margin-left: 1rem;
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
