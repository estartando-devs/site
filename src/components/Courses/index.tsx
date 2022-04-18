import React from 'react';
import { CourseData, CourseKey } from '../../mocks';
import { Course } from './Course';

export const Courses = ({ coursesData }: { coursesData: CourseData }) => (
  <>
    {Object.keys(coursesData).map((courseKey: string) => (
      <Course
        key={courseKey}
        courseData={coursesData[courseKey as CourseKey]}
      />
    ))}
  </>
);
