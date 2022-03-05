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
  schedule: ISchedule[];
}

const mock: ISchedule[] = [
  {
    title: 'Inscrições',
    description: 'Até o dia 20 de março',
    dateEnd: '2022-03-20T12:00:00Z',
  },
  {
    title: 'Prova',
    description: '22 de março, às 19h30',
    dateEnd: '2022-03-22T22:30:00Z',
  },
  {
    title: 'Resultado da Prova',
    description: '23 de março',
    dateEnd: '2022-03-23T23:00:00Z',
  },
  {
    title: 'Hackathon',
    description: '26 de março, às 19h',
    dateEnd: '2022-03-26T22:00:00Z',
  },
  {
    title: 'Bate papo com o time',
    description: 'Online, entre os dias 28 de março e 4 de abril',
    dateEnd: '2022-04-04T23:00:00Z',
  },
  {
    title: 'Início das Aulas',
    description: '12 de abril ',
    dateEnd: '2022-04-12T23:00:00Z',
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

export const scheduleMock: ScheduleSectionProps = {
  title: `Sobre o <br /> <span>processo seletivo </span>`,
  description: ` Acreditamos no poder da <span>transformação social</span> através da
  Tecnologia da Informação. Por isso, oferecemos uma formação objetiva e
  focada nas exigências do mercado de TI. Os dois cursos incluem ainda
  conhecimentos em métodos de gestão ágil de projetos utilizados no mercado
  para o desenvolvimento de trabalhos em equipe, além de assessoria no
  Linkedin e direcionamento de carreira.`,
  schedule,
};
