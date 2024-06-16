import { CourseKey } from '../../../mocks';
import { CourseKeyByName, CourseKeyByNameTeam } from '../../../types';

export const getKeyByCourse = (course: string) => {
  if (!course) {
    return CourseKeyByName['Desenvolvimento Web'];
  }
  const dict: Record<string, string> = {
    'Desenvolvimento Web': CourseKeyByName['Desenvolvimento Web'],
    'Desenvolvimento Backend': CourseKeyByName['Desenvolvimento Backend'],
    'Design UI/UX': CourseKeyByName['Design UI/UX'],
    'Soft Skills': CourseKeyByNameTeam['Soft Skills'],
  };
  return dict[course] as CourseKey;
};
