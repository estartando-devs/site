import styled from 'styled-components';

type StyleProps = {
  bgColor?: string;
  width?: string;
};

const CourseContainer = styled.section`
  width: 100%;
  max-width: 1000px;
  padding: 0 5px 0 60px;
  margin-top: 100px;
`;

const TitleContainer = styled.div<StyleProps>`
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

const IntroText = styled.p`
  font-size: 16px;
  margin-top: 30px;
  color: ${({ theme }) => theme.palette.design.white};
  font-weight: 100;
  line-height: 2;
`;

const modulesText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.design.white};
`;

const ModulesTextContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 50px;

  > img {
    cursor: pointer;
  }
`;

const ListModulesContainer = styled.div`
  margin: 10px 0 15px 0;

  > p {
    color: ${({ theme }) => theme.palette.design.white};
    line-height: 2;
  }
`;

export {
  CourseContainer,
  TitleContainer,
  IntroText,
  modulesText,
  ModulesTextContainer,
  ListModulesContainer,
};
