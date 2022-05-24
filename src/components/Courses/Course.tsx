import React, { useMemo } from 'react';
import { Eye } from '@styled-icons/heroicons-outline';
import { Typography } from '..';
import { Course as ICourse } from '../../mocks';
import * as S from './styles';
import { useTheme } from 'styled-components';

type PropsCourse = {
  courseData: ICourse;
  acordionTitle?: string;
  withAnimation?: boolean;
};

export const Course = ({
  courseData,
  acordionTitle = 'Ver módulos',
  withAnimation = true,
  ...rest
}: PropsCourse) => {
  const {
    palette: {
      design: { white },
    },
  } = useTheme();

  const animation = useMemo(
    () => ({
      'data-aos': 'fade-up',
      'data-aos-easing': 'ease-in-out',
      'data-aos-anchor-placement': 'top-center',
    }),
    []
  );

  const animationProps = withAnimation ? animation : {};

  return (
    <S.CourseContainer {...animationProps} {...rest}>
      <S.TitleContainer
        width={courseData.widthContainerTitle}
        bgColor={courseData.backgroundTitle}
      >
        <Typography variant="body1">{courseData.title}</Typography>
      </S.TitleContainer>
      <S.IntroText>{courseData.coursePresentation}</S.IntroText>
      <S.ModulesTextContainer>
        <S.ModulesText>
          {acordionTitle}
          <Eye width={24} height={24} color={white} />
        </S.ModulesText>
        <S.ListModulesContainer>
          {courseData.courseModules.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </S.ListModulesContainer>
      </S.ModulesTextContainer>
    </S.CourseContainer>
  );
};
