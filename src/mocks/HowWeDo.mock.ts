export type Characterist = {
  imageProps: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  description: string;
  key: string;
};

export type HowWeDoSectionProps = {
  title: string;
  dataAos?: string;
  description: string;
  dataAosEasing?: string;
  dataAosAnchorPlacement?: string;
  characteristicsList: Characterist[];
};

const characteristicsList: Characterist[] = [
  {
    key: 'characteristcCard-1',
    imageProps: {
      src: 'icons/protagonismo-icon',
      alt: 'ícone referente as categorias do aluno',
      width: 46,
      height: 46,
    },
    description: 'Aluno como protagonista do processo de aprendizado',
  },
  {
    key: 'characteristcCard-2',
    imageProps: {
      src: 'icons/transparencia-icon',
      alt: 'ícone referente as categorias do aluno',
      width: 46,
      height: 46,
    },
    description: 'Transparência total nas relações',
  },
  {
    key: 'characteristcCard-3',
    imageProps: {
      src: 'icons/foco-icon',
      alt: 'ícone referente as categorias do aluno',
      width: 46,
      height: 46,
    },
    description: 'Foco na qualidade do que é desenvolvido',
  },
  {
    key: 'characteristcCard-4',
    imageProps: {
      src: 'icons/proximidade-icon',
      alt: 'ícone referente as categorias do aluno',
      width: 46,
      height: 46,
    },
    description: 'Proximidade com os alunos',
  },
  {
    key: 'characteristcCard-5',
    imageProps: {
      src: 'icons/constancia-icon',
      alt: 'ícone referente as categorias do aluno',
      width: 46,
      height: 46,
    },
    description: 'Prática constante',
  },
];

export const howWeDoMock: HowWeDoSectionProps = {
  title: `Como nós <br/><span>Fazemos </span>?`,
  description: `Nossa proposta de ensino coloca o aluno como protagonista. Incentivamos a <strong>autonomia</strong> e <strong> dedicação</strong> <strong> pessoal</strong> para o avanço no curso.<br/><br/>Nossas aulas, com conteúdos práticos e bem <strong> hands-on</strong>, preparam os alunos para a realidade do mercado de trabalho.<br/><br/> Além dos conteúdos específicos de cada curso, apresentamos as principais ferramentas Open Source exigidas pelo mercado e trabalhamos no desenvolvimento das softs-skills mais desejadas pelo mercado da tecnologia:  <strong>colaboração</strong>, <strong> comunicação</strong>,<strong> criatividade </strong> e <strong> flexibilidade</strong>.`,
  characteristicsList,
  dataAos: 'fade-up',
  dataAosEasing: 'ease-in-out',
  dataAosAnchorPlacement: 'top-center',
};
