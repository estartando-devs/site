export interface ISchedule {
  title: string;
  description: string;
  disable?: boolean;
  dateEnd: string;
  friendlyDate?: string;
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

export const scheduleMock: ISchedule[] = mock.map((current) => ({
  ...current,
  disable: current.title !== nextEvent?.title,
  friendlyDate: new Date(current.dateEnd).toLocaleDateString(),
}));
