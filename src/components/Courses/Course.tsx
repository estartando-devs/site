import React, { useEffect, useState } from 'react';
import { Eye } from '@styled-icons/heroicons-outline';
import { Typography } from '..';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Course as ICourse } from '../../mocks';
import * as S from './styles';
import { useTheme } from 'styled-components';

type PropsCourse = {
  courseData: ICourse;
};

export const Course = ({ courseData }: PropsCourse) => {
  const [exhibition, setExhibition] = useState(false);
  const {
    palette: {
      design: { white },
    },
  } = useTheme();

  return (
    <S.CourseContainer
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <S.TitleContainer
        width={courseData.widthContainerTitle}
        bgColor={courseData.backgroundTitle}
      >
        <Typography variant="body1">{courseData.title}</Typography>
      </S.TitleContainer>
      <S.IntroText>{courseData.coursePresentation}</S.IntroText>
      <S.ModulesTextContainer onClick={() => setExhibition((prev) => !prev)}>
        <S.ModulesText>Ver módulos</S.ModulesText>
        <Eye width={24} height={24} color={white} />
      </S.ModulesTextContainer>
      <S.ListModulesContainer>
        {exhibition &&
          courseData.courseModules.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
      </S.ListModulesContainer>
    </S.CourseContainer>
  );
};
