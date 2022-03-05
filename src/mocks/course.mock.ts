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
    coursePresentation: 'A nossa formação em Programação Front-end prepara você para atuar no desenvolvimento de aplicações web, criando interfaces e integrando com APIs. Temos como objetivo torná-lo apto a atuar nas maiores empresas de tecnologia do mercado, ensinando os principais conceitos e ferramentas exigidas, além da experiência de desenvolver uma solução real com os designers e outros devs formados pelo Estartando Devs.',
    courseModules: [
      'Como funciona a internet',
      'O mercado de tecnologia',
      'HTML5',
      'CSS3',
      'Versionamento de código com git',
      'Sass',
      'Lógica de programação com Javascript',
      'Scrum',
      'React Js',
    ],
  },
  backEnd: {
    backgroundTitle: '#1e6f7a',
    widthContainerTitle: '293px',
    title: 'Programação Back-end',
    coursePresentation: 'A nossa formação em Programação Back-end prepara você para atuar no desenvolvimento de APIs e disponibilizar os recursos desenvolvidos em cloud. Temos como objetivo torná-lo apto a atuar nas maiores empresas de tecnologia do mercado, ensinando os principais conceitos e ferramentas exigidas, além da experiência de desenvolver uma solução real com os designers e outros devs formados pelo Estartando Devs.',
    courseModules: [
      'Como funciona a internet',
      'O mercado de tecnologia',
      'Conhecimentos basicos de HTML5, CSS3',
      'Versionamento de código com git',
      'Lógica de programação com Javascript',
      'Arquitetura de dados',
      'NodeJS',
      'SQL e NoSQL',
      'Banco de dados',
      'API REST / GraphQL',
      'SOLID',
    ],
  },
  design: {
    backgroundTitle: '#45408e',
    widthContainerTitle: '173px',
    title: 'Design UI/UX',
    coursePresentation: 'A nossa formação em Design UI/UX prepara você para atuar de ponta a ponta na construção de um produto digital. Tendo como base a abordagem do Design Thinking, você aprenderá diversas ferramentas usadas no mercado, além da experiência de desenvolver uma solução real com os devs formados pelo Estartando Devs.',
    courseModules: [
      'Aula Inaugural: conhecendo mercado e conceitos básicos ',
      'Métodos e processos em UX - Imersão: Qual é o problema que precisamos resolver?',
      'Métodos e processos em UX - Definição: Organizar para resolver',
      'Métodos e processos em UX - Ideação: Hora de explorar possibilidades.',
      'Métodos e processos em UX - Entrega: Prototipação e outros entregáveis',
      'Design de Interface: Elementos da interface',
      'Design de Interface: Mão na massa com o Figma',
      'Design de Interface: Usabilidade e padrões de design',
      'Métricas em UX',
      'Projeto Final: designers e devs criando soluções inovadoras',
    ],
  },
};



export const cousesMock = { coursesData };
