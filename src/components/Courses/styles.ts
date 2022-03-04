import styled from 'styled-components';

type StyleProps = {
  bgColor?: string;
  width?: string;
};

export const CourseContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 0 120px;
  margin-top: 100px;
  @media (max-width: ${({ theme: { media } }) => media.tablet_landscape}) {
    padding: 2rem 2rem 2.7rem;
    margin-top: 3rem;
  }
`;

export const TitleContainer = styled.div<StyleProps>`
  background-color: ${({ bgColor }) => bgColor};
  max-width: ${({ width }) => width};
  height: 23px;
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
  font-size: 16px;
  margin-top: 30px;
  color: ${({ theme }) => theme.palette.design.white};
  font-weight: 100;
  line-height: 2;
`;

export const ModulesText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.design.white};
`;

export const ModulesTextContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 50px;
  cursor: pointer;
  @media (max-width: ${({ theme: { media } }) => media.tablet}) {
    margin-top: 1.3rem;
  }
`;

export const ListModulesContainer = styled.div`
  margin: 10px 0 15px 0;

  > p {
    color: ${({ theme }) => theme.palette.design.white};
    line-height: 2;
  }
`;
