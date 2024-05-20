export type CourseKey = 'frontend' | 'backend' | 'design';

export type Course = {
  backgroundTitle: string;
  widthContainerTitle: string;
  title: string;
  coursePresentation: string;
  courseModules: string[];
};

export type CourseData = Record<CourseKey, Course>;

const coursesData: CourseData = {
  frontend: {
    backgroundTitle: '#0d6f61',
    widthContainerTitle: '300px',
    title: 'Programação Front-end',
    coursePresentation:
      'A nossa formação em Programação Front-end prepara você para atuar no desenvolvimento de aplicações web, criando interfaces e integrando com APIs. Temos como objetivo torná-lo apto a atuar nas maiores empresas de tecnologia do mercado, ensinando os principais conceitos e ferramentas exigidas, além da experiência de desenvolver uma solução real com os designers e outros devs formados pelo Estartando Devs.',
    courseModules: [
      'Mercado de Tecnologia e Fundamentos da Internet',
      'Git e Github: Versionamento de código',
      'HTML5',
      'CSS3',
      'Sass',
      'Javascript',
      'TypeScript',
      'Orientação a Objetos',
      'Angular',
    ],
  },
  backend: {
    backgroundTitle: '#1e6f7a',
    widthContainerTitle: '293px',
    title: 'Programação Back-end',
    coursePresentation:
      'A nossa formação em Programação Back-end prepara você para atuar no desenvolvimento de APIs e disponibilizar os recursos desenvolvidos em cloud. Temos como objetivo torná-lo apto a atuar nas maiores empresas de tecnologia do mercado, ensinando os principais conceitos e ferramentas exigidas, além da experiência de desenvolver uma solução real com os designers e outros devs formados pelo Estartando Devs.',
    courseModules: [
      'Mercado de Tecnologia e Fundamentos da Internet',
      'Controle de versionamento (Git)',
      'Conhecendo a linguagem C#',
      'Bancos de Dados (SGBD)',
      'Diagramas de Classes (UML)',
      'Conhecendo o ASP.NET Core',
      'Fundamentos de Arquitetura de Software',
      'Introdução ao Domain-Driven Design (DDD)',
      'Deploy da Aplicação',
    ],
  },
  design: {
    backgroundTitle: '#45408e',
    widthContainerTitle: '173px',
    title: 'Design UI/UX',
    coursePresentation:
      'A nossa formação em Design UI/UX prepara você para atuar de ponta a ponta na construção de um produto digital. Tendo como base a abordagem do Design Thinking, você aprenderá diversas ferramentas usadas no mercado, além da experiência de desenvolver uma solução real com os devs formados pelo Estartando Devs.',
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
