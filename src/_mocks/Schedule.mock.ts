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
    description: "Até o dia 28 de fevereiro",
    disable: false,
  },
  {
    image: "checklist",
    title: "Prova Online",
    description: "02 de março, às 19h30",
    disable: true,
  },
  {
    image: "encounter",
    title: "Hackathon",
    description: "04 de março, às 19h",
    disable: true,
  },
  {
    image: "support",
    title: "Bate papo com o time",
    description: "Online, entre os dias 8 e 12 de março",
    disable: true,
  },
  {
    image: "onlineCourse",
    title: "Início das Aulas",
    description: "16 de março ",
    disable: true,
  },
];
