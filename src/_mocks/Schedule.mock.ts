export interface ISchedule {
  image: string;
  title: string;
  description: string;
  disable?: boolean;
  dateEnd: string;
}

const mock: ISchedule[] = [
  {
    image: "subscribe",
    title: "Inscrições",
    description: "Até o dia 20 de março",
    dateEnd: "2022-03-20T12:00:00Z",
  },
  {
    image: "checklist",
    title: "Prova",
    description: "22 de março, às 19h30",
    dateEnd: "2022-03-22T22:30:00Z",
  },
  {
    image: "encounter",
    title: "Hackathon",
    description: "26 de março, às 19h",
    dateEnd: "2022-03-26T22:00:00Z",
  },
  {
    image: "support",
    title: "Bate papo com o time",
    description: "Online, entre os dias 28 de março e 4 de abril",
    dateEnd: "2022-04-04T23:00:00Z",
  },
  {
    image: "onlineCourse",
    title: "Início das Aulas",
    description: "12 de abril ",
    dateEnd: "2022-04-12T23:00:00Z",
  },
];

const nextEvent: ISchedule | undefined = mock
  .find((current) => new Date(current.dateEnd) > new Date())
  || mock[mock.length - 1];

export const scheduleMock: ISchedule[] = mock.map((current) => ({
  ...current,
  disable: current.title !== nextEvent?.title,
}));
