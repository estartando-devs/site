export type WhatWeTeachProps = {
  title: string;
  description: string;
  dataAos: string;
  dataAosEasing: string;
  dataAosAnchorPlacement: string;
};

export const whatWeTeachMock: WhatWeTeachProps = {
  title: `O que nós <span>ensinamos </span>?`,
  description: `Acreditamos no poder da <span> transformação social </span>
  através da Tecnologia da Informação. Por isso, oferecemos uma formação
  objetiva e focada nas exigências do mercado de TI. Os três cursos
  incluem ainda conhecimentos em métodos de <span> gestão ágil </span>
  de projetos utilizados no mercado para o desenvolvimento de trabalhos em
  equipe, além de assessoria no Linkedin e direcionamento de carreira.`,
  dataAos: 'fade-up',
  dataAosEasing: 'ease-in-out',
  dataAosAnchorPlacement: 'top-center',
};
