import Image from 'next/image';
import { Typography } from '../Typography';
import * as S from './styles';

const WhatWeTeach = () => (
  <S.Container>
    <S.HeadingSection>
      <Typography variant="h2">
        O que nós <S.MarkedText>ensinamos </S.MarkedText>?
      </Typography>
      <Typography variant="body2">
        Acreditamos no poder de
        <S.MarkedText> transformação social </S.MarkedText>
        através da Tecnologia da Informação. Por isso, oferecemos uma formação
        objetiva e focada nas exigências do mercado de TI. Os três cursos
        incluem ainda conhecimentos em métodos de
        <S.MarkedText> gestão ágil </S.MarkedText>
        de projetos utilizados no mercado para o desenvolvimento de trabalhos em
        equipe, além de assessoria no Linkedin e direcionamento de carreira.
      </Typography>
    </S.HeadingSection>
    <Image
      src="images/ensinando"
      width={503}
      height={407}
      alt="Duas fotos lado a lado, a primeira e a segunda mostra uma pessoa mexendo no computador pelo programa de edição de código"
    />
  </S.Container>
);

export { WhatWeTeach };
