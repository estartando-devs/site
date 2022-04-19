import { CourseKey } from '../../../mocks';

export const getKeyByCourse = (course: string) => {
  const dict: Record<string, string> = {
    'Desenvolvimento Web': 'frontend',
    'Desenvolvimento Backend': 'backend',
    'Design UI/UX': 'design',
  };
  return dict[course] as CourseKey;
};
