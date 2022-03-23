import styled from 'styled-components';
import { Course } from '../../Courses/Course';
import { Typography } from '../../Typography';

export const ApprovedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0rem 2.7rem;
  max-width: ${({ theme: { media } }) => media.desktop_fullhd};

  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    padding: 2rem 2rem 2.7rem;
    margin-top: 3rem;
  }

  @media (min-width: ${({ theme: { media } }) => media.desktop_fullhd}) {
    margin: 6.25rem auto 0;
  }
`;

export const ApprovedTitle = styled(Typography).attrs({
  variant: 'h2',
  weight: 'bold',
})`
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  margin-bottom: 2rem;
`;

export const Lists = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
`;

export const CourseData = styled(Course)`
  margin-top: 0rem;
  padding-bottom: 3.75rem;
`;
