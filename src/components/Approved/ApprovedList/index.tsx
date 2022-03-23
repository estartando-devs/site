import React from 'react';
import * as S from './ApprovedListStyled';
import { coursesData } from './mock';

export const ApprovedList = () => {
  return (
    <S.ApprovedListContainer id="Resultado">
      <S.ApprovedTitle>Lista de aprovados</S.ApprovedTitle>
      <S.Lists>
        <S.CourseData
          acordionTitle="Ver Lista"
          withAnimation={false}
          courseData={coursesData.frontEnd}
        />
        <S.CourseData
          acordionTitle="Ver Lista"
          withAnimation={false}
          courseData={coursesData.backEnd}
        />
        <S.CourseData
          acordionTitle="Ver Lista"
          withAnimation={false}
          courseData={coursesData.design}
        />
      </S.Lists>
    </S.ApprovedListContainer>
  );
};
