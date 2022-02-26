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

const TitleContainer = styled.div`
  background-color: ${({ bgColor }: StyleProps) => bgColor};
  max-width: ${({ width }: StyleProps) => width};
  height: 23px;
  position: relative;

  > p {
    position: absolute;
    top: -13px;
    left: 10px;
    @media (max-width: 352px) {
      font-size: 17px;
    }
  }
`;

const IntroText = styled.p`
  font-size: 16px;
  margin-top: 30px;
  color: white;
  font-weight: 100;
  line-height: 2;
  @media (max-width: 352px) {
    font-size: 14px;
  }
`;

const modulesText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: white;
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
    color: white;
    line-height: 2;
    font-size: 14px;
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
