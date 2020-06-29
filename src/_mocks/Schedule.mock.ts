export interface ISchedule {
  image: string;
  title: string;
  description: string;
}

export const scheduleMock: ISchedule[] = [
  {
    image: "subscribe",
    title: "Inscrições",
    description: "Até o dia 25 de julho",
  },
  {
    image: "checklist",
    title: "Prova Online",
    description: "28 de julho, às 19h30",
  },
  {
    image: "encounter",
    title: "Hackathon",
    description: "30 de julho, às 19h30",
  },
  {
    image: "support",
    title: "Bate papo com o time",
    description: "Será online, entre os dias 3 e 7 de agosto",
  },
  {
    image: "onlineCourse",
    title: "Início das Aulas",
    description: "18 de agosto ",
  },
];
