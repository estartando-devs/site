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
    description: "Até o dia 28 de fevereiro",
    dateEnd: "2021-02-28",
  },
  {
    image: "checklist",
    title: "Prova Online",
    description: "02 de março, às 19h30",
    dateEnd: "2021-03-03",
  },
  {
    image: "encounter",
    title: "Hackathon",
    description: "04 de março, às 19h",
    dateEnd: "2021-03-05",
  },
  {
    image: "support",
    title: "Bate papo com o time",
    description: "Online, entre os dias 8 e 12 de março",
    dateEnd: "2021-03-13",
  },
  {
    image: "onlineCourse",
    title: "Início das Aulas",
    description: "23 de março ",
    dateEnd: "2021-03-7",
  },
];

const nextEvent: ISchedule | undefined = mock
  .find((current) => new Date(current.dateEnd) > new Date())
  || mock[mock.length - 1];

export const scheduleMock: ISchedule[] = mock.map((current) => ({
  ...current,
  disable: current.title !== nextEvent?.title,
}));
