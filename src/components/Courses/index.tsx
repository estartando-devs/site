import { CourseData } from '../../mocks';
import { Course } from './Course';

export const Courses = ({ coursesData }: { coursesData: CourseData }) => (
  <>
    {Object.entries(coursesData).map(([key, value]) => (
      <Course key={key} courseData={value} />
    ))}
  </>
);
