import React from 'react';
import { ApprovedCourses } from './ApprovedCourses';

import * as S from './styles';

export type ObjectCourseType = {
  color: string;
  course: string;
  students: string[];
};

export type ApprovedListCourseType = {
  approvedListCourse: Array<ObjectCourseType>;
};

export const ListApprovedCourses = ({
  approvedListCourse,
}: ApprovedListCourseType) => (
  <S.ListApprovedContainer id="approved-list">
    <S.Title>
      <S.TitleCheckout>Confira a lista de</S.TitleCheckout>
      <S.TitleApproved> aprovados :D</S.TitleApproved>
    </S.Title>
    {approvedListCourse?.map((objectCourse: ObjectCourseType) => (
      <ApprovedCourses
        key={objectCourse.course}
        approvedCourse={objectCourse}
      />
    ))}
  </S.ListApprovedContainer>
);
