import { approvedListMock } from '../../../mocks/approvedListMock';

export type Course = {
  backgroundTitle: string;
  widthContainerTitle: string;
  title: string;
  coursePresentation: string;
  courseModules: string[];
};

export type CourseData = Record<string, Course>;

export const coursesData: Record<string, Course> = {
  frontEnd: {
    backgroundTitle: '#0d6f61',
    widthContainerTitle: '300px',
    title: 'Front-end',
    coursePresentation: '',
    courseModules: approvedListMock.frontend.sort(),
  },
  backEnd: {
    backgroundTitle: '#1e6f7a',
    widthContainerTitle: '293px',
    title: 'Back-end',
    coursePresentation: '',
    courseModules: approvedListMock.backend.sort(),
  },
  design: {
    backgroundTitle: '#45408e',
    widthContainerTitle: '173px',
    title: 'Design UI/UX',
    coursePresentation: '',
    courseModules: approvedListMock.design.sort(),
  },
};
