export type Course = {
  backgroundTitle: string;
  widthContainerTitle: string;
  title: string;
  coursePresentation: string;
  courseModules: string[];
};

export type CourseData = Record<string, Course>;

const coursesData: Record<string, Course> = {
  frontEnd: {
    backgroundTitle: '#0d6f61',
    widthContainerTitle: '300px',
    title: 'Programação Front-end',
    coursePresentation: '',
    courseModules: ['Como funciona a internet', 'HTML5', 'CSS3'],
  },
  backEnd: {
    backgroundTitle: '#1e6f7a',
    widthContainerTitle: '293px',
    title: 'Programação Back-end',
    coursePresentation: '',
    courseModules: ['Lógica de programação', 'Arquitetura de dados', 'nodeJS'],
  },
  design: {
    backgroundTitle: '#45408e',
    widthContainerTitle: '173px',
    title: 'Design UI/UX',
    coursePresentation: '',
    courseModules: [
      'Figma',
      'O que é experiência do usuário',
      'Design de interface',
    ],
  },
};

export const cousesMock = { coursesData };
