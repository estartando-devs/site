import { Eye } from '@styled-icons/heroicons-outline';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { ObjectCourseType } from '.';
import { Typography } from '..';
import { useAnimation } from '../../hooks/useAnimation';
import * as S from './styles';

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

  const animationProps = useAnimation({ withAnimation });

  return (
    <S.CourseContainer {...animationProps} {...rest}>
      <S.TitleContainer color={approvedCourse?.color}>
        <Typography variant="body1">{approvedCourse?.course}</Typography>
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
