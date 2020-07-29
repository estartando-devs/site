export interface ISchedule {
  image: string;
  title: string;
  description: string;
  disable: boolean;
}

export const scheduleMock: ISchedule[] = [
  {
    image: "subscribe",
    title: "Inscrições",
    description: "Até o dia 25 de julho",
    disable: true,
  },
  {
    image: "checklist",
    title: "Prova Online",
    description: "28 de julho, às 19h30",
    disable: true,
  },
  {
    image: "encounter",
    title: "Hackathon",
    description: "30 de julho, às 19h",
    disable: false,
  },
  {
    image: "support",
    title: "Bate papo com o time",
    description: "Online, entre os dias 3 e 7 de agosto",
    disable: false,
  },
  {
    image: "onlineCourse",
    title: "Início das Aulas",
    description: "18 de agosto ",
    disable: false,
  },
];
