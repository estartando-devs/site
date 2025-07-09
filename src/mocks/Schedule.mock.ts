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
      title: 'PREENCHIMENTO DO FORMULÁRIO',
      description:
        'Queremos conhecer você!\n Você preencherá um formulário com perguntas pessoais discursivas sobre sua experiência, história e formação, seja ela qual for. Selecionaremos os candidatos que se encaixam melhor com a nossa proposta para a próxima etapa.',
    },
    key: 'stage-1',
  },
  {
    stage: {
      title: 'BATE-PAPO COM O TIME',
      description: `Aqui a gente se conhece melhor!

         Agendaremos uma conversa online com nosso time para você mostrará seus estudos, projetos e portfólio. Também haverá uma avaliação técnica, onde faremos perguntas sobre os pré-requisitos para iniciar as aulas ao vivo. Não é necessário experiência profissional. Precisamos saber se você tem o conhecimento básico necessário.`,
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
