export type Stages = {
  stage: {
    title: string;
    description: string;
  };
  key: string;
};
export interface ISchedule {
  title: string;
  description: string;
  disable?: boolean;
  dateEnd: string;
  friendlyDate?: string;
  key?: string;
}

export interface ScheduleSectionProps {
  title: string;
  description: string;
  stagesList: Stages[];
  schedule: ISchedule[];
}

const mock: ISchedule[] = [
  {
    title: 'Inscrições',
    description: 'Até o dia 02 de junho',
    dateEnd: '2024-06-02T23:59:00Z',
  },
  {
    title: 'Prova',
    description: '03 de junho',
    dateEnd: '2024-06-03T23:59:00Z',
  },
  {
    title: 'Resultado da Prova',
    description: '04 de junho',
    dateEnd: '2024-06-04T23:59:00Z',
  },
  // {
  //   title: 'Hackathon',
  //   description: '26 de março, às 10h',
  //   dateEnd: '2022-03-26T12:30:00Z',
  // },
  {
    title: 'Bate papo com o time',
    description: 'Online, entre os dias 06 de junho e 14 de junho',
    dateEnd: '2024-06-14T23:59:00Z',
  },
  {
    title: 'Resultado Final',
    description: '15 de junho',
    dateEnd: '2024-06-16T23:59:00Z',
  },
  {
    title: 'Início das Aulas',
    description: '18 de junho',
    dateEnd: '2024-06-19T23:59:00Z',
  },
];

const nextEvent: ISchedule | undefined =
  mock.find((current) => new Date(current.dateEnd) > new Date()) ||
  mock[mock.length - 1];

export const schedule: ISchedule[] = mock.map((current, index) => ({
  ...current,
  key: `scheduleData-${index}`,
  disable: current.title !== nextEvent?.title,
  friendlyDate: new Date(current.dateEnd).toLocaleDateString(),
}));

const stagesList: Stages[] = [
  {
    stage: {
      title: 'TESTE DE CLASSIFICAÇÃO',
      description:
        'Uma prova de raciocínio lógico. Simples e objetiva. Funciona como uma classificação de acordo com o número de vagas.',
    },
    key: 'stage-1',
  },
  // {
  //   stage: {
  //     title: 'НАСКАТНОN',
  //     description:
  //       'Como você trabalha em equipe? Além de conhecermos melhor suas habilidades, você já se prepara para as ferramentas que serão usadas ao longo do curso.',
  //   },
  //   key: 'stage-2',
  // },
  {
    stage: {
      title: 'BATE-PAPO COM O TIME',
      description:
        'Aqui a gente se conhece melhor e seleciona os candidatos que se encaixam melhor com o nosso perfil.',
    },
    key: 'stage-3',
  },
];

export const scheduleMock: ScheduleSectionProps = {
  title: `Nosso <span>processo seletivo</span> tem 2 etapas:`,
  description: ` Acreditamos no poder da <span>transformação social</span> através da
  Tecnologia da Informação. Por isso, oferecemos uma formação objetiva e
  focada nas exigências do mercado de TI. Os dois cursos incluem ainda
  conhecimentos em métodos de gestão ágil de projetos utilizados no mercado
  para o desenvolvimento de trabalhos em equipe, além de assessoria no
  Linkedin e direcionamento de carreira.`,
  stagesList,
  schedule,
};
