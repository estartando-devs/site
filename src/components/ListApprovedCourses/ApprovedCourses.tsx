import React, { useState } from 'react';
import { Eye } from '@styled-icons/heroicons-outline';
import { Typography } from '..';
import { ObjectCourseType } from '.';
import * as S from './styles';
import { useTheme } from 'styled-components';

type PropsCourse = {
  approvedCourse: ObjectCourseType;
  acordionTitle?: string;
  withAnimation?: boolean;
};

export const ApprovedCourses = ({
  approvedCourse,
  acordionTitle = 'Ver lista',
  withAnimation = true,
  ...rest
}: PropsCourse) => {
  const [exhibition, setExhibition] = useState(false);
  const {
    palette: {
      design: { white },
    },
  } = useTheme();

  const animation = {
    'data-aos': 'fade-up',
    'data-aos-easing': 'ease-in-out',
    'data-aos-anchor-placement': 'top-center',
  };

  const animationProps = withAnimation ? animation : {};

  return (
    <S.CourseContainer {...animationProps} {...rest}>
      <S.TitleContainer bgColor={approvedCourse?.color}>
        <Typography variant="body1">{approvedCourse.course}</Typography>
      </S.TitleContainer>
      <S.ModulesTextContainer onClick={() => setExhibition((prev) => !prev)}>
        <S.ModulesText>{acordionTitle}</S.ModulesText>
        <Eye width={24} height={24} color={white} />
      </S.ModulesTextContainer>
      <S.ListModulesContainer>
        {exhibition &&
          approvedCourse?.students?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </S.ListModulesContainer>
    </S.CourseContainer>
  );
};
