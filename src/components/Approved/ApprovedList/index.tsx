import React from 'react';
import * as S from './ApprovedListStyled';
import { coursesData } from './mock';

export const ApprovedList = () => {
  return (
    <S.ApprovedListContainer id="Resultado">
      <S.ApprovedTitle>Lista de aprovados</S.ApprovedTitle>
      <S.Lists>
        {Object.keys(coursesData).map((key: string) => (
          <S.CourseData
            key={key}
            acordionTitle="Ver Lista"
            withAnimation={false}
            courseData={coursesData[key]}
          />
        ))}
      </S.Lists>
    </S.ApprovedListContainer>
  );
};
