import React from 'react';
import { CourseData } from '../../mocks';
import { Course } from './Course';

export const Courses = ({ coursesData }: { coursesData: CourseData }) => (
  <>
    {Object.keys(coursesData).map((courseKey: string) => (
      <Course key={courseKey} courseData={coursesData[courseKey]} />
    ))}
  </>
);
