import { CourseKey } from '../../../mocks';
import { CourseKeyByName } from '../../../types';

export const getKeyByCourse = (course: string) => {
  if (!course) {
    return CourseKeyByName['Desenvolvimento Web'];
  }
  const dict: Record<string, string> = {
    'Desenvolvimento Web': CourseKeyByName['Desenvolvimento Web'],
    'Desenvolvimento Backend': CourseKeyByName['Desenvolvimento Backend'],
    'Design UI/UX': CourseKeyByName['Design UI/UX'],
  };
  return dict[course] as CourseKey;
};
